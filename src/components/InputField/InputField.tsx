import React, { FC } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import FormHelperText from "@material-ui/core/FormHelperText";
import styles from './InputField.module.scss';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import { Input } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';

interface InputFieldProps {
  label?: string
  name: string
  value: string | number
  onChange: any
  type: string
  disabled?: boolean
  className?: string
  style?: object
  hasError?: boolean
  errorMessage?: string
  changeType?: any
  position?: "end" | "start" 
  symbol?: any

}

const InputField: FC<InputFieldProps> = (props: InputFieldProps) => {

  const {label, value, name, onChange, type, disabled, className, style, hasError, errorMessage, changeType, position, symbol} = props
  
  
  return(
  <div className={styles.InputField} data-testid="InputField">
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate={false}
      autoComplete="off"
      className={className}
      style={style}
    >
      <FormControl fullWidth sx={{ m: 1 }} variant="standard">
      <InputLabel htmlFor="standard-adornment-amount">{label}</InputLabel>
        <Input
        name={name}
        value={value}
        type={type}
        disabled={disabled}
        onChange={onChange}
        startAdornment={<InputAdornment position={position || "end"}>{symbol}</InputAdornment>}
        />
    {hasError && (<FormHelperText style={{ color: "salmon" }}>{errorMessage}</FormHelperText>)}
    </FormControl>
    </Box>
  </div>
)};

export default InputField;
