import React from 'react';
import { Helmet } from 'react-helmet';

import useFetch from '../../hooks/useFetch';
import withLoading from '../../hocs/withLoading';
import Breadcrumb from '../../components/Breadcrumb';
import ProductsList from './components/ProductsList';
import { getItemsEndpoint } from '../../api/itemsEndpoints';

const Products = ({ history }) => {
  const endpoint = getItemsEndpoint(history.location.state);
  const { loading, data, error } = useFetch(endpoint);

  const WithLoadingProducts = withLoading(() => (
    <div data-testid='products' className='w-100 d-md-flex flex-column'>
      {data?.items?.length && (
        <>
          <Breadcrumb items={data.categories} />
          <ProductsList products={data.items} />
        </>
      )}

      {error && <h2>{error}</h2>}
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>MeLi frontend challenge SSR - Products</title>
      </Helmet>
      <WithLoadingProducts isLoading={loading} />
    </>
  );
};

export default Products;
