import React from 'react';
import { shallow } from 'enzyme';

import Header from '../../Header';
import Layout from '../Layout';

describe('Layout', () => {
  beforeEach(() => {});

  const renderComponent = ({ children }) =>
    shallow(<Layout>{children}</Layout>);

  test('Layout and children should be render in the document', () => {
    const children = <h2>Tests</h2>;
    const wrapper = renderComponent({ children });

    expect(!!wrapper.find(<Header />)).toBe(true);
    expect(wrapper.find('#container').exists()).toBeTruthy();
    expect(wrapper.find('h2').exists()).toBeTruthy();
  });
});
