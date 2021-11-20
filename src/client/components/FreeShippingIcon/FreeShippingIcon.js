import React from 'react';
import propTypes from 'prop-types';
import { Image } from 'react-bootstrap';

import freeShippingIcon from '../../assets/images/free-shipping-icon.png';

const FreeShippingIcon = ({ classes }) => (
  <Image
    data-testid='free-shipping-icon'
    src={freeShippingIcon}
    alt='Envío gratis'
    className={classes}
  />
);

FreeShippingIcon.propTypes = {
  classes: propTypes.string,
};

export default FreeShippingIcon;
