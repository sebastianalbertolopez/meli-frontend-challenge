import React from 'react';
import { Image } from 'react-bootstrap';

import freeShippingIcon from '../../assets/images/free-shipping-icon.png';

const FreeShippingIcon = ({ classes }) => (
  <Image src={freeShippingIcon} alt='Envío gratis' className={classes} />
);

export default FreeShippingIcon;
