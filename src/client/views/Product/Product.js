import React from 'react';
import propTypes from 'prop-types';
import { Helmet } from 'react-helmet';

import useFetch from '../../hooks/useFetch';
import withLoading from '../../hocs/withLoading';
import Breadcrumb from '../../components/Breadcrumb';
import ProductDetails from './components/ProductDetails';
import Notification from '../../components/Notification';
import { getItemEndpoint } from '../../api/itemsEndpoints';

const Product = ({ match }) => {
  const endpoint = getItemEndpoint(match.params.id);
  const { loading, data, error } = useFetch(endpoint);
  const { item } = data;

  const WithLoadingProduct = withLoading(() => (
    <div data-testid='product' className='w-100 d-md-flex flex-column'>
      {!!item && (
        <>
          <Breadcrumb items={item.categories} />
          <ProductDetails {...item} />
        </>
      )}

      {error && <Notification message={error} />}
    </div>
  ));

  return (
    <>
      <Helmet>
        <title>MeLi frontend challenge SSR - Producto</title>
      </Helmet>
      <WithLoadingProduct isLoading={loading} />
    </>
  );
};

Product.propTypes = {
  match: propTypes.object.isRequired,
};

export default Product;
