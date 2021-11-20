import { renderHook } from '@testing-library/react-hooks';

import useFetch from '../useFetch';
import { productsMock as products } from '../../__mocks__/productsMock';

jest.mock('axios', () => {
  /* eslint-disable global-require */
  const { productsMock } = require('../../__mocks__/productsMock');

  return {
    create: () => ({
      get: jest.fn().mockResolvedValue({ data: productsMock }),
    }),
  };
});

describe('useFetch success', () => {
  const renderUseFetch = (item) =>
    renderHook(() => useFetch(`items?q=${item}`));

  test('fetch data', async () => {
    const { result, waitForNextUpdate } = renderUseFetch('notebook');

    expect(result.current).toStrictEqual({
      loading: true,
      data: {},
      error: '',
    });

    await waitForNextUpdate();

    expect(result.current).toStrictEqual({
      loading: false,
      data: products,
      error: '',
    });
  });
});
