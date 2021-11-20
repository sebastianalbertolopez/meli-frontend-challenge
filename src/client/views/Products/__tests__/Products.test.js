import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Helmet } from 'react-helmet';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Products from '../Products';
import { ProductsProvider } from '../../../contexts/Products';

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    location: { search: '?search=notebook' },
  }),
}));

jest.mock('axios', () => {
  /* eslint-disable global-require */
  const { productsMock } = require('../../../__mocks__/productsMock');

  return {
    create: () => ({
      get: jest.fn().mockResolvedValue({ data: productsMock }),
    }),
  };
});

describe('Products', () => {
  const history = createMemoryHistory();
  const renderComponent = async () => {
    await act(async () =>
      render(
        <Router history={history}>
          <ProductsProvider>
            <Products />
          </ProductsProvider>
        </Router>,
      ),
    );
  };

  test('should render metadata', async () => {
    await renderComponent();

    const helmet = Helmet.peek();
    expect(helmet.title).toBe('MeLi frontend challenge SSR - Productos');
  });

  test('Products should be render in the document', async () => {
    await renderComponent();

    expect(screen.getByTestId('products')).toBeInTheDocument();
  });
});
