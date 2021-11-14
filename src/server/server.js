/* eslint-disable global-require */
import express from 'express';
import morgan from 'morgan';
import webpack from 'webpack';
import React from 'react';
import { renderToString } from 'react-dom/server';

import App from '../client/app/App';
import config from './config';
import { renderFullPage } from './renderFullPage';

const { NODE_ENV, PORT } = config;
const app = express();

if (NODE_ENV === 'development') {
  app.use(morgan('dev'));
  const webpackConfig = require('../../webpack.config');
  const webpackDevMiddleware = require('webpack-dev-middleware');
  const webpackHotMiddleware = require('webpack-hot-middleware');
  const compiler = webpack(webpackConfig);

  app.use(
    webpackDevMiddleware(compiler, {
      publicPath: webpackConfig.output.publicPath,
      serverSideRender: true,
    }),
  );
  app.use(webpackHotMiddleware(compiler));
}

app.get('*', (req, res) => {
  const stringComponent = renderToString(<App />);
  res.send(renderFullPage(stringComponent));
});

app.listen(PORT, (err) => {
  if (err) return console.log(err);
  return console.log(`Listening on port ${PORT}, environment ${NODE_ENV}`);
});
