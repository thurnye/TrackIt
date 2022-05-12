import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InputField from './InputField';

describe('<InputField />', () => {
  test('it should mount', (props:any) => {
    const {name, value,type, onChange} = props
    render(<InputField 
      name={name} 
      value={value}
      type={type}
      onChange={onChange}
      />);
    
    const inputField = screen.getByTestId('InputField');

    expect(inputField).toBeInTheDocument();
  });
});