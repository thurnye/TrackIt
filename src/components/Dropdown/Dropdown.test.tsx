import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Dropdown from './Dropdown';

describe('<Dropdown />', () => {
  test('it should mount', (props: any) => {
    const {value, name, onChange, options} = props
    render(<Dropdown
      value={value} 
      name={name} 
      onChange={onChange}
      options={options}
       />);
    
    const dropdown = screen.getByTestId('Dropdown');

    expect(dropdown).toBeInTheDocument();
  });
});