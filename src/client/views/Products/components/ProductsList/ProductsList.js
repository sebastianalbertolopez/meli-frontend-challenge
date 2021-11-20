import React from 'react';
import propTypes from 'prop-types';
import { Row, Col, Image } from 'react-bootstrap';

import Jumbotron from '../../../../components/Jumbotron';
import FreeShippingIcon from '../../../../components/FreeShippingIcon';
import ProductLink from '../ProductLink';
import { getFormattedPrice, getCondition } from '../../../../utils/helpers';
import './ProductsList.scss';

const ProductsList = ({ products }) => (
  <Jumbotron classes='px-3 mb-5' data-testid='products-list'>
    {products?.map(
      ({ id, title, picture, price, condition, location, free_shipping }) => (
        <Row
          key={id}
          id='product-item'
          data-testid='product-item'
          className='justify-content-center py-3 d-md-flex'
        >
          <Col md={9} className='d-md-inline-flex'>
            <ProductLink id={id}>
              <Image
                width={180}
                height={180}
                src={picture}
                alt={title}
                rounded
                loading='lazy'
              />
            </ProductLink>
            <div className='px-3'>
              <div className='py-2 price'>
                <span>{getFormattedPrice(price)}</span>
                {free_shipping && (
                  <FreeShippingIcon classes='px-2 align-baseline' />
                )}
              </div>
              <ProductLink id={id}>
                <div className='py-2 title'>{title}</div>
              </ProductLink>
              <div className='condition py-2'>{getCondition(condition)}</div>
            </div>
          </Col>
          <Col md={3}>
            <div className='location'>{location}</div>
          </Col>
        </Row>
      ),
    )}
  </Jumbotron>
);

ProductsList.propTypes = {
  products: propTypes.arrayOf(
    propTypes.shape({
      id: propTypes.string.isRequired,
      title: propTypes.string.isRequired,
      price: propTypes.shape({
        amount: propTypes.number.isRequired,
        decimals: propTypes.number,
        currency: propTypes.string.isRequired,
      }),
      condition: propTypes.string.isRequired,
      free_shipping: propTypes.bool.isRequired,
      picture: propTypes.string.isRequired,
      location: propTypes.string.isRequired,
    }),
  ),
};

export default ProductsList;
