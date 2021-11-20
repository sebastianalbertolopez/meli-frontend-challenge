import React from 'react';
import { render, screen } from '@testing-library/react';

import withLoading from '../withLoading';

describe('withLoading', () => {
  const WithLoadingComponent = withLoading(() => (
    <h1 data-testid='hoc-component'>High Order Component Test</h1>
  ));

  const renderComponent = ({ isLoading }) =>
    render(<WithLoadingComponent isLoading={isLoading} />);

  test('Loading should be render in the document', () => {
    renderComponent({ isLoading: true });

    expect(screen.getByTestId('loading')).toBeInTheDocument();
  });

  test('HoC children component should be render in the document', () => {
    renderComponent({ isLoading: false });

    expect(screen.getByTestId('hoc-component')).toBeInTheDocument();
  });
});
