import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import Avatar from '../Avatar';
import SearchForm from '../SearchForm';
import './Header.scss';

const Header = () => (
  <header id='header'>
    <Container className='col-md-6'>
      <Row className='justify-content-md-center'>
        <Col className='d-md-inline-flex'>
          <Avatar />
          <SearchForm />
        </Col>
      </Row>
    </Container>
  </header>
);

export default Header;
