import React from 'react';
import { render, screen } from '@testing-library/react';

import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ProductsList from '../../components/ProductsList';
import { productsMock } from '../../../../__mocks__/productsMock';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    location: { search: '?search=notebook' },
  }),
}));

describe('ProductsList', () => {
  const history = createMemoryHistory();
  const renderComponent = () =>
    render(
      <Router history={history}>
        <ProductsList products={productsMock.items} />
      </Router>,
    );

  test('ProductsList should be render in the document', () => {
    renderComponent();

    expect(screen.getByTestId('products-list')).toBeInTheDocument();

    expect(screen.getAllByTestId('product-item').length).toBe(4);

    expect(screen.getAllByTestId('free-shipping-icon').length).toBe(2);
  });
});
