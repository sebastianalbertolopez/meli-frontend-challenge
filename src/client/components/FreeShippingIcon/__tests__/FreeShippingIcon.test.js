import React from 'react';
import { render, screen } from '@testing-library/react';

import FreeShippingIcon from '../FreeShippingIcon';

describe('FreeShippingIcon', () => {
  const classes = 'mb-4';
  const renderComponent = () => render(<FreeShippingIcon classes={classes} />);

  test('FreeShippingIcon should be render in the document', () => {
    renderComponent();

    expect(screen.getByTestId('free-shipping-icon')).toBeInTheDocument();
  });
});
