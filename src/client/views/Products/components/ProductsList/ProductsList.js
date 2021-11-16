import React from 'react';
import { Link } from 'react-router-dom';
import { Row, Col, Image } from 'react-bootstrap';

import FreeShippingIcon from '../../../../components/FreeShippingIcon';
import { getFormattedPrice, getCondition } from '../../../../utils/helpers';
import './ProductsList.scss';

const ProductLink = ({ children, id }) => (
  <Link to={`/items/${id}`}>{children}</Link>
);

const ProductsList = ({ products }) => (
  <section id='products-list' className='px-3 mb-5' data-testid='products-list'>
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
  </section>
);

export default ProductsList;
