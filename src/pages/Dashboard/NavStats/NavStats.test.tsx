import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavStats from './NavStats';

describe('<NavStats />', () => {
  test('it should mount', () => {
    render(<NavStats />);
    
    const navStats = screen.getByTestId('NavStats');

    expect(navStats).toBeInTheDocument();
  });
});