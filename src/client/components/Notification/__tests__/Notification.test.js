import React from 'react';
import { render, screen } from '@testing-library/react';

import Notification from '../Notification';

describe('Notification', () => {
  beforeEach(() => {});

  const renderComponent = ({ message }) =>
    render(<Notification message={message} />);

  test('Notification should be render in the document', () => {
    renderComponent({ message: 'Test' });

    expect(screen.getByText('Test')).toBeTruthy();
  });
});
