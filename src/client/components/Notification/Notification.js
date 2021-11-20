import React from 'react';
import propTypes from 'prop-types';

import Jumbotron from '../Jumbotron';

const Notification = ({ message }) => (
  <Jumbotron classes='mb-5 mt-5 px-4 py-5'>
    <h3 className=' text-center'>{message}</h3>
  </Jumbotron>
);

Notification.propTypes = {
  message: propTypes.string.isRequired,
};

export default Notification;
