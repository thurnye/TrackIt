import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import BarChart from './BarChart';

describe('<BarChart />', () => {
  test('it should mount', () => {
    render(<BarChart />);
    
    const barChart = screen.getByTestId('BarChart');

    expect(barChart).toBeInTheDocument();
  });
});