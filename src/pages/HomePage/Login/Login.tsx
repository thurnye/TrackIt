import React, { FC, useState, useEffect } from 'react';
import styles from './Login.module.scss';
import { Dialog, TextField } from '../../../components';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  
  const [open, setOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const handleClick = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
  }
  const handleLogin = () => {
    console.log("clicked")
  }

  return(
    <div className={styles.Login} data-testid="Login">
      <Dialog
        label="Login"
        title="Login"
        open={open}
        onClose={() => handleClose()}
        onClick={handleClick}
        actions={[
          {
          label: "Cancel",
          onClick: () => handleClose(),
          disabled: false
        },
        {
          label: "Login",
          onClick: () => handleLogin(),
          disabled: false
          }
        ]}
        children = {<>
        
        <TextField
        label='Email'
          name='email'
          value={email}
          type='email'
          onChange={(e:any) => setEmail(e.target.value)}
        />
        <TextField
        label='Password'
          name='password'
          value={password}
          type='password'
          onChange={(e:any) => setPassword(e.target.value)}
        />
        </>}
      />
    </div>
  )
};

export default Login;
