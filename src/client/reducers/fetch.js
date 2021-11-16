const SET_LOADING = 'SET_LOADING';
const SET_DATA = 'SET_DATA';
const SET_ERROR = 'SET_ERROR';

export const initialState = {
  loading: true,
  error: '',
  data: {},
};

export const fetchReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LOADING:
      return initialState;
    case SET_DATA:
      return {
        ...initialState,
        loading: false,
        data: action.payload,
      };
    case SET_ERROR:
      return {
        ...initialState,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const setData = (data) => ({ type: SET_DATA, payload: data });
export const setError = (error) => ({ type: SET_ERROR, payload: error });
export const setLoading = () => ({ type: SET_LOADING });
