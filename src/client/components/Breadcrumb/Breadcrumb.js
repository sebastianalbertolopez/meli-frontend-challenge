import React from 'react';
import propTypes from 'prop-types';

import './Breadcrumb.scss';

const Breadcrumb = ({ items }) => (
  <div className='py-3' id='breadcrumb' data-testid='breadcrumb'>
    {items?.map((item, idx) => (
      <span key={idx}>
        {item} {idx < items.length - 1 ? ' > ' : ''}
      </span>
    ))}
  </div>
);

Breadcrumb.propTypes = {
  items: propTypes.arrayOf(propTypes.string),
};

export default Breadcrumb;
