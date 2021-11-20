import { useReducer } from 'react';
import { renderHook, act } from '@testing-library/react-hooks';

import {
  fetchReducer,
  initialState,
  setLoading,
  setData,
  setError,
} from '../fetch';
import { productsMock } from '../../__mocks__/productsMock';

describe('fetchReducer', () => {
  const renderReducer = (state = initialState) =>
    renderHook(() => useReducer(fetchReducer, state));

  test('SET_DATA', () => {
    expect.assertions(1);

    const { result } = renderReducer();
    const [, dispatch] = result.current;

    act(() => {
      dispatch(setData(productsMock));
    });

    expect(result.current[0]).toEqual({
      loading: false,
      error: '',
      data: productsMock,
    });
  });

  test('SET_ERROR', () => {
    expect.assertions(1);

    const { result } = renderReducer();
    const [, dispatch] = result.current;

    const error = 'Ocurrió un error al intentar obtener los productos';
    act(() => {
      dispatch(setError(error));
    });

    expect(result.current[0]).toEqual({
      loading: false,
      error,
      data: {},
    });
  });

  test('SET_LOADING', () => {
    expect.assertions(1);

    const state = {
      loading: false,
      error: '',
      data: productsMock,
    };

    const { result } = renderReducer(state);
    const [, dispatch] = result.current;

    act(() => {
      dispatch(setLoading());
    });

    expect(result.current[0]).toEqual({
      loading: true,
      error: '',
      data: {},
    });
  });

  test('UNKNOWN_ACTION returns current state', () => {
    expect.assertions(1);

    const state = {
      loading: false,
      error: '',
      data: productsMock,
    };

    const { result } = renderReducer(state);
    const [, dispatch] = result.current;

    act(() => {
      dispatch({ type: 'UNKNOWN' });
    });

    expect(result.current[0]).toEqual(state);
  });
});
