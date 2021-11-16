/* eslint-disable global-require */
import express from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { renderRoutes } from 'react-router-config';
import { StaticRouter } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import config from './config';
import apiRoutes from './routes/app';
import clientRoutes from '../client/routes/routes';
import { renderFullPage } from './renderFullPage';

const { NODE_ENV, PORT } = config;
const server = express();

if (NODE_ENV === 'development') {
  server.use(morgan('dev'));
  const webpackConfig = require('../../webpack.config');
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
}

server.use('/api', apiRoutes);

server.get('*', (req, res) => {
  const stringComponent = renderToString(
    <StaticRouter location={req.url} context={{}}>
      {renderRoutes(clientRoutes)}
    </StaticRouter>,
  );

  const helmet = Helmet.renderStatic();

  res.send(renderFullPage(stringComponent, helmet));
});

server.listen(PORT, (err) => {
  if (err) return console.log(err);
  return console.log(`Listening on port ${PORT}, environment ${NODE_ENV}`);
});
