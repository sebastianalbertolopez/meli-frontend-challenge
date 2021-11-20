import React from 'react';
import { render, screen, act } from '@testing-library/react';
import { Helmet } from 'react-helmet';

import Product from '../Product';

jest.mock('axios', () => {
  /* eslint-disable global-require */
  const { productMock } = require('../../../__mocks__/productMock');

  return {
    create: () => ({
      get: jest.fn().mockResolvedValue({ data: productMock }),
    }),
  };
});

describe('Product', () => {
  const match = { params: { id: 'MLA1112126568' } };
  const renderComponent = async () => {
    await act(async () => render(<Product match={match} />));
  };

  test('should render metadata', async () => {
    await renderComponent();

    const helmet = Helmet.peek();
    expect(helmet.title).toBe('MeLi frontend challenge SSR - Producto');
  });

  test('Product should be render in the document', async () => {
    await renderComponent();

    expect(screen.getByTestId('product')).toBeInTheDocument();
    expect(
      screen.getByText(/Moto G20 64 Gb Azul Cielo 4 Gb Ram/i),
    ).toBeInTheDocument();
  });
});
