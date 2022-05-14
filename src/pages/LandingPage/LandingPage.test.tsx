import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import LandingPage from './LandingPage';

describe('<LandingPage />', () => {
  test('it should mount', (props:any) => {
    const {user} = props
    render(<LandingPage user={user}/>);
    
    const landingPage = screen.getByTestId('LandingPage');

    expect(landingPage).toBeInTheDocument();
  });
});