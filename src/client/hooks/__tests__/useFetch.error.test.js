import { renderHook } from '@testing-library/react-hooks';

import useFetch from '../useFetch';

jest.mock('axios', () => {
  /* eslint-disable global-require */
  const { error404Mock } = require('../../__mocks__/error404Mock');

  return {
    create: () => ({
      get: jest.fn().mockRejectedValueOnce(error404Mock),
    }),
  };
});

describe('useFetch error', () => {
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
      data: {},
      error: 'NOT FOUND',
    });
  });
});
