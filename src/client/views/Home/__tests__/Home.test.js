import React from 'react';
import { render } from '@testing-library/react';
import { Helmet } from 'react-helmet';

import Home from '../Home';

describe('Home', () => {
  const renderComponent = () => render(<Home />);

  test('should render metadata', () => {
    renderComponent();

    const helmet = Helmet.peek();
    expect(helmet.title).toBe('MeLi frontend challenge SSR - Home');
  });
});
