import React, { FC } from 'react';
import Button from '@mui/material/Button';
import styles from './Button.module.scss';

interface BasicButtonProps {
  label: string
  disabled?: boolean
  onClick: any
  className?: string
  style?: object
  variant?: "text" | "contained" | "outlined"
}

const BasicButton: FC<BasicButtonProps> = (props:BasicButtonProps) => {
  const {label, disabled, onClick, className, style, variant} = props
  return(
    <div className={styles.Button} data-testid="Button">
      <Button 
    variant={variant || "contained" }
    onClick={onClick}
    className={className}
    style={style}
    color="primary"
    disabled={disabled}
    >
      {label}
    </Button>
    </div>
  )
};

export default BasicButton;
