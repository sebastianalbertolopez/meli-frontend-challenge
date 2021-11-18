import React from 'react';
import { Link } from 'react-router-dom';
import { Image } from 'react-bootstrap';

import meliAvatar from '../../assets/images/logo-meli.png';

const Avatar = (props) => (
  <Link to='/'>
    <Image id='logo-meli' data-testid='logo-meli' src={meliAvatar} {...props} />
  </Link>
);

export default Avatar;
