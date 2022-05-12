import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Alert from './Alert';

describe('<Alert />', () => {
  test('it should mount', (props:any) => {
    const {text,severity} = props
    render(<Alert text={text} severity={severity}/>);
    
    const alert = screen.getByTestId('Alert');

    expect(alert).toBeInTheDocument();
  });
});