import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import HomeView from '../views/Home';
import ProductsView from '../views/Products';
import ProductView from '../views/Product';

const Routes = () => (
  <Switch>
    <Route exact path='/' component={HomeView} />
    <Route exact path='/items' component={ProductsView} />
    <Route exact path='/items/:id' component={ProductView} />
    <Redirect to='/' />
  </Switch>
);

export default Routes;
