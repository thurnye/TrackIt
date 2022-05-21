import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Badge from './Badge';

describe('<Badge />', () => {
  test('it should mount', (props:any) => {
    const {number} = props
    render(<Badge number={number}/>);
    
    const badge = screen.getByTestId('Badge');

    expect(badge).toBeInTheDocument();
  });
});