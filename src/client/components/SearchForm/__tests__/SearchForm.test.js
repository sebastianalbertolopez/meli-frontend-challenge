import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';

import SearchForm from '../SearchForm';
import { ProductsContext } from '../../../contexts/Products';

describe('SearchForm', () => {
  afterAll(() => {
    jest.restoreMocks();
  });

  const searchProducts = jest.fn();
  const value = { searchProducts };
  const renderComponent = () =>
    render(
      <ProductsContext.Provider value={value}>
        <SearchForm />
      </ProductsContext.Provider>,
    );

  test('SearchForm should be render in the document', () => {
    renderComponent();

    expect(screen.getByTestId('search-form')).toBeInTheDocument();

    expect(
      screen.getByPlaceholderText(/Nunca dejes de buscar/i),
    ).toBeInTheDocument();
  });

  test('On clicks button, form should be submitted', () => {
    renderComponent();

    fireEvent.change(screen.getByTestId('search'), {
      target: { value: 'Test product' },
    });

    fireEvent.click(screen.getByRole('button', { type: 'submit' }));

    expect(searchProducts).toHaveBeenCalledWith('Test product');
  });

  test('should throw error when not wrapped inside ProductsProvider', () => {
    console.error = jest.fn();

    expect(() => render(<SearchForm />)).toThrow(
      'useProducts must be wrapper with AuthProvider',
    );
  });
});
