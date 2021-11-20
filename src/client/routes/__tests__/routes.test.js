import React from 'react';
import { act } from '@testing-library/react';
import { mount } from 'enzyme';
import { MemoryRouter } from 'react-router-dom';

import { ProductsProvider } from '../../contexts/Products';
import Routes from '../index';

jest.mock('axios', () => ({
  create: () => ({
    get: jest.fn().mockResolvedValue({ data: {} }),
  }),
}));

describe('Routes', () => {
  const renderRoutes = (initialEntries = ['/']) =>
    mount(
      <ProductsProvider>
        <MemoryRouter initialEntries={initialEntries}>
          <Routes />
        </MemoryRouter>
      </ProductsProvider>,
    );

  test('render Home', () => {
    const wrapper = renderRoutes();

    expect(wrapper.find('Router').prop('history').location.pathname).toEqual(
      '/',
    );
    expect(wrapper.find('Home').length).toEqual(1);
  });

  test('redirect to / if path is not matched', () => {
    const wrapper = renderRoutes(['/unknown']);

    expect(wrapper.find('Router').prop('history').location.pathname).toEqual(
      '/',
    );
    expect(wrapper.find('Home').length).toEqual(1);
  });

  test('render Products', async () => {
    let wrapper;
    await act(async () => {
      wrapper = renderRoutes(['/items?search="notebook"']);
    });

    expect(wrapper.find('Products').length).toEqual(1);
  });

  test('render Product', async () => {
    let wrapper;
    await act(async () => {
      wrapper = renderRoutes(['/items/MLA932471563']);
    });

    expect(wrapper.find('Product').length).toEqual(1);
  });
});
