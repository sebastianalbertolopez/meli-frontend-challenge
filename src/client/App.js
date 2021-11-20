import React from 'react';

import Layout from './components/Layout';
import Routes from './routes';
import { ProductsProvider } from './contexts/Products';

const App = () => (
  <ProductsProvider>
    <Layout>
      <Routes />
    </Layout>
  </ProductsProvider>
);

export default App;
