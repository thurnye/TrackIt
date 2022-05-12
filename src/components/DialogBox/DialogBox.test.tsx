import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import DialogBox from './DialogBox';



describe('<DialogBox />', () => {
  test('it should mount', (props:any) => {
    const {label, title, open, onClose, onClick, children, actions} = props
    render(<DialogBox 
      label={label} 
      title={title} 
      onClose={onClose} 
      onClick={onClick} 
      open={open} 
      actions={actions} 
      children={children}
      />);
    
    const dialogBox = screen.getByTestId('DialogBox');

    expect(dialogBox).toBeInTheDocument();
  });
});