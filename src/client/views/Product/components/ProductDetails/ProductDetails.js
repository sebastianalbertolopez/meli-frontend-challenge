import React from 'react';
import { Row, Col, Image, Button } from 'react-bootstrap';

import Jumbotron from '../../../../components/Jumbotron';
import FreeShippingIcon from '../../../../components/FreeShippingIcon';
import { getFormattedPrice, getCondition } from '../../../../utils/helpers';
import './ProductDetails.scss';

const ProductDetails = ({
  id,
  title,
  price,
  picture,
  condition,
  free_shipping,
  sold_quantity,
  description,
}) => (
  <Jumbotron classes='px-4 mb-5' data-testid={`product-details-${id}`}>
    <Row className='pb-5'>
      <Col md={8} className='text-center'>
        <Image src={picture} alt={title} />
      </Col>
      <Col md={4} className='pt-4'>
        <div className='subtitle py-1'>
          {getCondition(condition)} | {sold_quantity} vendidos
          {free_shipping && <FreeShippingIcon classes='align-middle ml-1' />}
        </div>
        <div className='title py-1'>{title}</div>
        <div className='price py-2'>
          {getFormattedPrice(price)}
          <span className='decimals'>{price.decimals ?? '00'}</span>
        </div>
        <Button id='buy' className='mt-4 w-100'>
          Comprar
        </Button>
      </Col>
    </Row>
    <Row className='py-5'>
      <Col md={10}>
        <div className='description-title mb-3'>Descripción del producto</div>
        <div className='description'>{description}</div>
      </Col>
    </Row>
  </Jumbotron>
);

export default ProductDetails;
