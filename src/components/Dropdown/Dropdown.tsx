import React, { FC } from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormHelperText from "@material-ui/core/FormHelperText";

import styles from './Dropdown.module.scss';
interface MenuItemProps{
  label: string
  value: any
  disabled?: boolean
}

interface DropdownProps {
  label?: string
  value: any
  name: string
  onChange: any
  className?: string
  style?: object
  options: Array<MenuItemProps>
  hasError?: boolean
  errorMessage?: string
  error? : boolean
  id?: any
}

const Dropdown: FC<DropdownProps> = (props: DropdownProps ) => {
  
  const { id,label, value, name, onChange, className, style, options, hasError, errorMessage, error} = props

  return (
    <div className={styles.Dropdown} data-testid="Dropdown">
      <FormControl sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-controlled-open-select-label">{label}</InputLabel>
          <Select
            variant="standard"
            labelId="demo-controlled-open-select-label"
            value={value}
            label={label}
            onChange={onChange}
            name={name}
            className={className}
            style={style}
            error={error}
            id={id}
          >
            {options.map((el, idx) => {
              const {label, value, disabled} = el
              return (
                <MenuItem key={idx} value={value} disabled={disabled}>{label}</MenuItem>

              )
            })}
          </Select>
          {hasError && (<FormHelperText style={{ color: "salmon" }}>{errorMessage}</FormHelperText>)}
        </FormControl>
    </div>
  )
};

export default Dropdown;
