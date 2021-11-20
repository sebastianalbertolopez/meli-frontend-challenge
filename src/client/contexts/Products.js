import React, { createContext, useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';

import useFetch from '../hooks/useFetch';
import { getItemsEndpoint } from '../api/itemsEndpoints';

const ProductsContext = createContext();
const { Provider } = ProductsContext;

const ProductsProvider = ({ children }) => {
  const history = useHistory();

  const [product, setProduct] = useState('');

  const endpoint = product ? getItemsEndpoint(product) : '';

  const { loading, data, error } = useFetch(endpoint);

  const searchProducts = (searchParam) => {
    if (!!searchParam) {
      history.push(`/items?search=${searchParam}`);
      // setProduct(searchParam);
    }
  };

  return (
    <Provider
      value={{
        searchProducts,
        product,
        setProduct,
        loading,
        data,
        error,
      }}
    >
      {children}
    </Provider>
  );
};

const useProducts = () => {
  const context = useContext(ProductsContext);

  if (!context) {
    throw new Error('useProducts must be wrapper with AuthProvider');
  }

  return context;
};

export { useProducts, ProductsContext, ProductsProvider };
