import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddSub from './AddSub';

describe('<AddSub />', () => {
  test('it should mount', () => {
    render(<AddSub />);
    
    const addSub = screen.getByTestId('AddSub');

    expect(addSub).toBeInTheDocument();
  });
});