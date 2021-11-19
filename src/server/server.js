/* eslint-disable global-require */
import express from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import React from 'react';
import helmet from 'helmet';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import config from './config';
import apiRoutes from './routes/app';
import clientRoutes from '../client/routes/routes';
import { renderFullPage } from './renderFullPage';
import manifestMiddleware from './middlewares/manifest';
import errorsHandlerMiddleware from './middlewares/errorsHandler';

const { NODE_ENV, PORT } = config;
const server = express();

if (NODE_ENV === 'development') {
  server.use(morgan('dev'));
  const webpackConfig = require('../../webpack.config.dev');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);

  server.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      serverSideRender: true,
    }),
  );
  server.use(webpackHotMiddleware(compiler));
} else {
  server.use(manifestMiddleware);
  server.use(express.static(`${__dirname}/public`));
  server.use(helmet());
  server.use(helmet.permittedCrossDomainPolicies());
  server.use(
    helmet.contentSecurityPolicy({
      directives: {
        defaultSrc: [
          "'self'",
          'https://http2.mlstatic.com/',
          'https://fonts.googleapis.com/',
          'https://fonts.gstatic.com/',
        ],
        upgradeInsecureRequests: [],
      },
    }),
  );
  server.disable('x-powered-by');
}

server.use('/api', apiRoutes);

server.get('*', (req, res) => {
  const stringComponent = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(clientRoutes)}
    </StaticRouter>,
  );

  res.send(
    renderFullPage(stringComponent, Helmet.renderStatic(), req.hashManifest),
  );
});

server.use(errorsHandlerMiddleware);

server.listen(PORT, (err) => {
  if (err) return console.log(err);
  return console.log(`Listening on port ${PORT}, environment ${NODE_ENV}`);
});
