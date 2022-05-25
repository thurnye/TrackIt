import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useDispatch} from 'react-redux';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {login } from '../../../store/userSlice'
import { Dialog, Alert } from '../../index';
import api from '../../../Api/api';
import {loginValidationSchema} from '../../../utils/Validations'
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';

import styles from './Login.module.scss';

interface LoginProps {}

const Login: FC<LoginProps> = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  
  const [open, setOpen] = useState<boolean>(false)
  const [errMsg, setErrMsg] = useState<string>('')
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(loginValidationSchema)
  });
  
  const handleClick = () => {
    setOpen(true)
  }


  
  const handleClose = () => {
    setOpen(false)
    reset()
  }


  const handleLogin = async(data:any) => {
    try {
      console.log(data)
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
        },
        {
          label: "Login",
          // onClick: () => handleLogin(),
          onClick: handleSubmit(handleLogin),
          }
        ]}
        children = {<>
        <Box px={3} py={2}>
            {errMsg && <Alert severity="error" text={errMsg}/>}
          <Grid container spacing={1}>
            <Grid item xs={12} sm={12}>
              <TextField
              variant="standard" 
                required
                id="email"
                label="Email"
                fullWidth
                margin="dense"
                {...register('email')}
                error={errors.email ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.email?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={12}>
              <TextField
                variant="standard" 
                required
                id="password"
                label="Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('password')}
                error={errors.password ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.password?.message}
              </Typography>
            </Grid>
          </Grid>
          <Box px={0} py={1} mt={3}>
            <Typography >
              Forgotten Password ?
            </Typography>

          </Box>
          <Box px={0} py={0}>
            <Typography >
              <i>*dont have an account?, you can create one here</i>
            </Typography>
          </Box>
        </Box>
        </>}
      />
    </div>
  )
};

export default Login;
