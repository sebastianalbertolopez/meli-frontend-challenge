import { useEffect, useCallback, useReducer } from 'react';

import API from '../api/API';
import {
  fetchReducer,
  initialState,
  setLoading,
  setData,
  setError,
} from '../reducers/fetch';

const useFetch = (endpoint) => {
  const [state, dispatch] = useReducer(fetchReducer, initialState);

  const fetchData = useCallback(async () => {
    try {
      dispatch(setLoading());
      const { data } = await API.get(endpoint);
      dispatch(setData(data));
    } catch (e) {
      console.error(e);
      dispatch(
        setError(
          e?.message ?? 'Ocurrió un error al intentar obtener los datos',
        ),
      );
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return state;
};

export default useFetch;
