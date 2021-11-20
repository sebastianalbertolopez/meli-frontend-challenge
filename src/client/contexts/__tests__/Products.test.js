import React from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import { ProductsProvider, useProducts } from '../Products';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush,
  }),
}));

describe('ProductsContext', () => {
  const renderContext = () =>
    renderHook(() => useProducts(), {
      wrapper: ({ children }) => (
        <ProductsProvider>{children}</ProductsProvider>
      ),
    });

  test('test products context', () => {
    const { result } = renderContext();

    const searchParam = 'Test product';
    act(() => {
      result.current.searchProducts(searchParam);
    });

    expect(mockHistoryPush).toHaveBeenCalledWith(
      `/items?search=${searchParam}`,
    );
  });
});
