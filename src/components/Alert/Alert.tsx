import React, { FC } from 'react';
import { Alert } from '@mui/material';
import styles from './Alert.module.scss';

interface AlertProps {
  text: string
  severity :  "error" | "warning" | "info" | "success"
  style?: object
  className? : string
}

const AlertMessage: FC<AlertProps> = (props:AlertProps) => {
  const {text, severity, className, style} = props
  
  return(
    <div className={styles.Alert} data-testid="Alert">
      <Alert severity={severity} className={className} style={style}>{text}</Alert>
    </div>
  )
};
export default AlertMessage;
