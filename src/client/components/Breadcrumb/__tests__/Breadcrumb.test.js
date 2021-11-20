import React from 'react';
import { render, screen } from '@testing-library/react';

import Breadcrumb from '../Breadcrumb';

describe('Breadcrumb', () => {
  const items = ['Deportes y Fitness', 'Fútbol', 'Pelotas'];
  const renderComponent = () => render(<Breadcrumb items={items} />);

  test('Breadcrumb should be render in the document', () => {
    renderComponent();

    expect(screen.getByTestId('breadcrumb')).toBeInTheDocument();
  });
});
