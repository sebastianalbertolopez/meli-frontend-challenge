import React from 'react';
import Loader from 'react-loader-spinner';
import { Row, Col } from 'react-bootstrap';

const Loading = () => (
  <Row className='justify-content-center h-100 w-100 align-items-center'>
    <Col className='text-center'>
      <Loader
        type='Oval'
        color='#999999'
        height={40}
        width={40}
        timeout={5000}
      />
    </Col>
  </Row>
);

export default Loading;
