import React, { useState, useEffect } from 'react';
import propTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Form,
  InputGroup,
  Button,
  Image,
} from 'react-bootstrap';

import Avatar from '../Avatar';
import searchIcon from '../../assets/images/search-icon.png';
import './Header.scss';

const Header = ({ handleSearch }) => {
  const { search: searchParams } = useLocation();
  const [search, setSearch] = useState('');

  useEffect(() => {
    const searchParam = new URLSearchParams(searchParams).get('search');
    setSearch(searchParam ?? '');
  }, [searchParams]);

  return (
    <header>
      <Container className='col-md-6'>
        <Row className='justify-content-md-center'>
          <Col className='d-md-inline-flex'>
            <Avatar />
            <Form
              className='flex-grow-1'
              onSubmit={(e) => {
                e.preventDefault();
                handleSearch(search);
              }}
            >
              <InputGroup>
                <Form.Control
                  type='text'
                  name='search'
                  id='search'
                  value={search}
                  data-testid='search'
                  className='form-control'
                  onChange={(e) => setSearch(e.target.value)}
                  placeholder='Nunca dejes de buscar'
                />
                <Button
                  type='submit'
                  id='submit-search'
                  data-testid='submit-search'
                >
                  <Image src={searchIcon} />
                </Button>
              </InputGroup>
            </Form>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

Header.propTypes = {
  handleSearch: propTypes.func.isRequired,
};

export default Header;
