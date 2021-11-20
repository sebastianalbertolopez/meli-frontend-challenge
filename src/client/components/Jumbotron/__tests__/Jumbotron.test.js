import React from 'react';
import { render, screen } from '@testing-library/react';

import Jumbotron from '../Jumbotron';

describe('Jumbotron', () => {
  beforeEach(() => {});

  const renderComponent = ({ children, classes }) =>
    render(<Jumbotron classes={classes}>{children}</Jumbotron>);

  test('Jumbotron should be render in the document', () => {
    const children = <h1>Tests</h1>;
    renderComponent({ children, classes: 'test' });

    expect(screen.getByText('Tests')).toBeTruthy();
  });
});
