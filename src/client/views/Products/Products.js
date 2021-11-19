import React from 'react';
import { Helmet } from 'react-helmet';

import useFetch from '../../hooks/useFetch';
import withLoading from '../../hocs/withLoading';
import Breadcrumb from '../../components/Breadcrumb';
import Notification from '../../components/Notification';
import ProductsList from './components/ProductsList';
import { getItemsEndpoint } from '../../api/itemsEndpoints';

const Products = ({ history }) => {
  const searchParam = new URLSearchParams(history.location.search).get(
    'search',
  );
  const endpoint = getItemsEndpoint(searchParam);
  const { loading, data, error } = useFetch(endpoint);
  const { items, categories } = data;

  const WithLoadingProducts = withLoading(() => (
    <div data-testid='products' className='w-100 d-md-flex flex-column'>
      {!!items?.length && (
        <>
          <Breadcrumb items={categories} />
          <ProductsList products={items} />
        </>
      )}

      {error && <Notification message={error} />}
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>MeLi frontend challenge SSR - Productos</title>
      </Helmet>
      <WithLoadingProducts isLoading={loading} />
    </>
  );
};

export default Products;
