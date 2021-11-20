import React, { useRef, useEffect } from 'react';
import { Form, InputGroup, Button, Image } from 'react-bootstrap';

import searchIcon from '../../assets/images/search-icon.png';
import { useProducts } from '../../contexts/Products';

const SearchForm = () => {
  const { searchProducts, product } = useProducts();

  const searchInput = useRef(product);

  useEffect(() => {
    searchInput.current.value = product;
  }, [product]);

  const handleSubmit = (e) => {
    e.preventDefault();
    searchProducts(searchInput.current.value.trim());
  };

  return (
    <Form
      data-testid='search-form'
      className='flex-grow-1'
      onSubmit={handleSubmit}
    >
      <InputGroup>
        <Form.Control
          type='text'
          name='search'
          id='search'
          data-testid='search'
          ref={searchInput}
          className='form-control'
          placeholder='Nunca dejes de buscar'
        />
        <Button type='submit' id='submit-search' data-testid='submit-search'>
          <Image src={searchIcon} />
        </Button>
      </InputGroup>
    </Form>
  );
};

export default SearchForm;
