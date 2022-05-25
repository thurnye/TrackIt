import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useDispatch} from 'react-redux';
import {login } from '../../../store/userSlice'
import styles from './Login.module.scss';
import { Dialog, TextField, Alert } from '../..';
import api from '../../../Api/api';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false)
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [errMsg, setErrMsg] = useState<string>('')

  const handleClick = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
    setEmail('')
    setPassword('')
    setErrMsg('')
  }
  const handleLogin = async() => {
    try {
      const data:object = {
        email : email,
        password : password,
      }
      const newUser = await api.postUserLogin(data)
      setErrMsg('')
      let token = newUser.data
      localStorage.setItem('token', token);  
      const user:any =  await jwt_decode(token); 
      dispatch(login(user))
      handleClose()
      user && navigate(`/dashboard`);
    } catch (error:any) {
      setErrMsg(error.response.data)
    }
  }

  return(
    <div className={styles.Login} data-testid="Login">
      <Dialog
        label="Login"
        title="Login"
        open={open}
        onClose={() => handleClose()}
        onClick={handleClick}
        style={{color: 'white'}}
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
        {errMsg && <Alert severity="error" text={errMsg}/>}
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
