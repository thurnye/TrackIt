import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  test('it should mount', (props:any) => {
    const {user} = props
    render(<Dashboard user={user}/>);
    
    const dashboard = screen.getByTestId('Dashboard');

    expect(dashboard).toBeInTheDocument();
  });
});