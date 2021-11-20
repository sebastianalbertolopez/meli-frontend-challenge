import React, { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { Helmet } from 'react-helmet';

import withLoading from '../../hocs/withLoading';
import Breadcrumb from '../../components/Breadcrumb';
import Notification from '../../components/Notification';
import ProductsList from './components/ProductsList';
import { useProducts } from '../../contexts/Products';

const Products = () => {
  const history = useHistory();
  const { loading, data, error, setProduct } = useProducts();
  const { items, categories } = data;

  const { search } = history.location;

  useEffect(() => {
    setProduct(new URLSearchParams(search).get('search') ?? '');
    return () => setProduct('');
  }, [search]);

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
