import React from 'react';

import './Jumbotron.scss';

const Jumbotron = ({ children, classes }) => (
  <section className={classes}>{children}</section>
);

export default Jumbotron;
