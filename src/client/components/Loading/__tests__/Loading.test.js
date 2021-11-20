import React from 'react';
import { shallow } from 'enzyme';
import Loader from 'react-loader-spinner';

import Loading from '../Loading';

describe('Loading', () => {
  beforeEach(() => {});

  const renderComponent = () => shallow(<Loading />);

  test('Loading should be render in the document and loader dissapear after 5000ms', () => {
    const wrapper = renderComponent();

    expect(wrapper.find('[data-testid="loading"]').exists()).toBe(true);
    expect(!!wrapper.find(<Loader />)).toBe(true);

    setTimeout(() => {
      expect(!!wrapper.find(<Loader />)).toBe(false);
    }, 5000);
  });
});
