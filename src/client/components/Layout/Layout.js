import React from 'react';
import propTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { Container } from 'react-bootstrap';

import Header from '../Header';
import './Layout.scss';

const Layout = ({ children }) => {
  const history = useHistory();

  const handleSearch = (search) => {
    !!search && history.push(`/items?search=${search}`, search);
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      <Container id='container' className='col-md-6 d-md-flex'>
        {children}
      </Container>
    </>
  );
};

Layout.propTypes = {
  children: propTypes.node.isRequired,
};

export default Layout;
