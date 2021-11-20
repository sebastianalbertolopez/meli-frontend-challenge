import React from 'react';
import { render, screen } from '@testing-library/react';

import ProductDetails from '../../components/ProductDetails';
import {
  productMock,
  productMockFreeShipping,
} from '../../../../__mocks__/productMock';

describe('ProductDetails', () => {
  const renderComponent = (mock) => render(<ProductDetails {...mock.item} />);

  test('ProductDetails should be render in the document', () => {
    renderComponent(productMockFreeShipping);

    expect(
      screen.getByTestId(`product-details-${productMock.item.id}`),
    ).toBeInTheDocument();

    expect(screen.getByTestId('free-shipping-icon')).toBeInTheDocument();
  });

  test('FreeShippingIcon should not be render', () => {
    renderComponent(productMock);

    expect(screen.queryByTestId('free-shipping-icon')).not.toBeInTheDocument();
  });
});
