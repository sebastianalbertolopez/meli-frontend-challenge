import React from 'react';
import { shallow } from 'enzyme';

import Header from '../Header';

describe('Header', () => {
  beforeEach(() => {});

  const renderComponent = () => shallow(<Header />);

  test('Header should be render in the document', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('#header').exists()).toBeTruthy();
  });
});
