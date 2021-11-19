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
    } catch ({ response }) {
      const { data: error } = response;
      dispatch(setError(error.message));
    }
  }, [endpoint]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return state;
};

export default useFetch;
