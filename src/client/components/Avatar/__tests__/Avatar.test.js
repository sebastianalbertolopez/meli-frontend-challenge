import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';

import Avatar from '../Avatar';

describe('Avatar', () => {
  const history = createMemoryHistory();
  const renderComponent = () =>
    render(
      <Router history={history}>
        <Avatar />
      </Router>,
    );

  test('Avatar should be render in the document', () => {
    renderComponent();

    expect(screen.getByTestId('logo-meli')).toBeInTheDocument();
  });

  test('On clicks Avatar, redirect to Home', () => {
    renderComponent();

    fireEvent.click(screen.getByTestId('logo-meli'));

    expect(history.location.pathname).toBe('/');
  });
});
