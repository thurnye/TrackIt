import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Subscriptions from './Subscriptions';

describe('<Subscriptions />', () => {
  test('it should mount', () => {
    render(<Subscriptions />);
    
    const subscriptions = screen.getByTestId('Subscriptions');

    expect(subscriptions).toBeInTheDocument();
  });
});