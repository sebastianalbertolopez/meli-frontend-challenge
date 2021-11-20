import React from 'react';
import propTypes from 'prop-types';

import './Jumbotron.scss';

const Jumbotron = ({ children, classes, ...rest }) => (
  <section {...rest} id='jumbotron' className={classes}>
    {children}
  </section>
);

Jumbotron.propTypes = {
  children: propTypes.node.isRequired,
  classes: propTypes.string,
};

export default Jumbotron;
