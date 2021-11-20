import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import ProductLink from '../../components/ProductLink';

describe('ProductLink', () => {
  const history = createMemoryHistory();
  const renderComponent = () =>
    render(
      <Router history={history}>
        <ProductLink id='MLA932471563'>
          <h1>Producto Test</h1>
        </ProductLink>
      </Router>,
    );

  test('ProductLink should be render in the document', () => {
    renderComponent();

    expect(screen.getByTestId('product-link')).toBeInTheDocument();
  });

  test('On clicks Avatar, redirect to Home', () => {
    renderComponent();

    fireEvent.click(screen.getByTestId('product-link'));

    expect(history.location.pathname).toBe('/items/MLA932471563');
  });
});
