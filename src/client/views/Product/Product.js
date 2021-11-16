import React from 'react';
import { Helmet } from 'react-helmet';

import useFetch from '../../hooks/useFetch';
import withLoading from '../../hocs/withLoading';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from './components/ProductDetails';
import { getItemEndpoint } from '../../api/itemsEndpoints';

const Product = ({ match }) => {
  const endpoint = getItemEndpoint(match.params.id);
  const { loading, data, error } = useFetch(endpoint);

  const WithLoadingProduct = withLoading(() => (
    <div data-testid='product' className='w-100 d-md-flex flex-column'>
      {!!data?.item && (
        <>
          <Breadcrumb items={data.item.categories} />
          <ProductDetails {...data.item} />
        </>
      )}

      {error && <h2>{error}</h2>}
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>MeLi frontend challenge SSR - Product</title>
      </Helmet>
      <WithLoadingProduct isLoading={loading} />
    </>
  );
};

export default Product;
