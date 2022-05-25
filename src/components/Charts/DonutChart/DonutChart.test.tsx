import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DonutChart from './DonutChart';

describe('<DonutChart />', () => {
  test('it should mount', () => {
    render(<DonutChart />);
    
    const donutChart = screen.getByTestId('DonutChart');

    expect(donutChart).toBeInTheDocument();
  });
});