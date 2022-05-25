import React, { FC } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import styles from './DialogBox.module.scss';

interface DialogActionsProps {
  label: string
  disabled?: boolean
  onClick: any
  className?: string
  style?: object
  key?: number
}

interface DialogBoxProps {
  label: string
  title: string
  open: boolean
  onClose?: any
  onClick: any
  children:  React.ReactNode 
  style?: object
  className?: string
  actions: Array<DialogActionsProps>
}

const DialogBox: FC<DialogBoxProps> = (props:DialogBoxProps) => {

  const {label, title, open, onClose, onClick, children, style, className, actions} = props

return (
  <div className={styles.DialogBox} data-testid="DialogBox">
    <Button 
    variant="text" 
    onClick={onClick}
    className={className}
    style={style}
    color="primary"
    >
      {label}
    </Button>
      <Dialog
        open={open}
        onClose={onClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {title}
        </DialogTitle>
        <DialogContent>
            {children}
        </DialogContent>
        <DialogActions>
          {actions.map((el, idx)=> {
            const {label, onClick, disabled, className, style} = el
            return (
          <Button
            variant='contained'
            key={idx}
            onClick={onClick} 
            disabled={disabled} 
            className={className} 
            style={style}
          >
            {label}
          </Button>
          )})}
        </DialogActions>
      </Dialog>
    
  </div>
)};

export default DialogBox;
