import React from 'react';
import propTypes from 'prop-types';
import { Container } from 'react-bootstrap';

import Header from '../Header';
import './Layout.scss';

const Layout = ({ children }) => (
  <>
    <Header />
    <Container id='container' className='col-md-6 d-md-flex'>
      {children}
    </Container>
  </>
);

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
