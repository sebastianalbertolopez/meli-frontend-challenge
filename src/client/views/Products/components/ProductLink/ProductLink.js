import React from 'react';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';

const ProductLink = ({ children, id }) => (
  <Link data-testid='product-link' to={`/items/${id}`}>
    {children}
  </Link>
);

ProductLink.propTypes = {
  children: propTypes.node.isRequired,
  id: propTypes.string.isRequired,
};

export default ProductLink;
