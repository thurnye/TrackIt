import React, { FC, useState } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useDispatch} from 'react-redux';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {login } from '../../../store/userSlice'
import { Dialog} from '../../index';
import api from '../../../Api/api';
import Divider from '@mui/material/Divider';
import {validationSchema} from '../../../utils/Validations' 
import styles from './SignUp.module.scss';

import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';

interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [open, setOpen] = useState<boolean>(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const handleClick = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
    reset()
  }


 


  const handleSignUp = async (data:any) => {
    try {
      
      // const data:object = {}
      console.log("data:", data)
      const newUser = await api.createAnAccount(data)
      // console.log("newUser", newUser.data)
      let token = newUser.data
      localStorage.setItem('token', token);  
      const user:any =  await jwt_decode(token); 
      dispatch(login(user))
      user && navigate(`/dashboard`);
    } catch (error) {
      console.log(error)
    }
  }
  
  
  const options=[
    'Employed',
    'Unemployed',
    'Self-Employed',
    'Student',
    'Retired',
  ]


  
  return (
    <div className={styles.SignUp} data-testid="SignUp">
      <Dialog
        label="SignUp"
        title="Create an Account"
        open={open}
        style={{color: 'white'}}
        onClick={handleClick}
        actions={[
          {
            label: "Cancel",
            onClick : () => handleClose()
          },
          {
            label: "SignUp",
            onClick : handleSubmit(handleSignUp)
          }
        ]}
        children = {
        <>
        
        <div>
      
      {/* Personal Information */}
        <Box px={3} py={2}>
          <Typography >
            Basic Information
          </Typography>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="standard" 
                required
                id="firstName"
                label="First Name"
                fullWidth
                margin="dense"
                {...register('firstName')}
                error={errors.firstName ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.firstName?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="standard" 
                required
                id="lastName"
                label="Last Name"
                fullWidth
                margin="dense"
                {...register('lastName')}
                error={errors.lastName ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.lastName?.message}
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
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

            <Grid item xs={12} sm={6}>
              <TextField
              variant="standard" 
                required
                id="phoneNumber"
                label="Phone Number"
                fullWidth
                margin="dense"
                {...register('phoneNumber')}
                error={errors.phoneNumber ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.phoneNumber?.message}
              </Typography>
            </Grid>
          </Grid>
        </Box>

        {/* Professional Information */}
        <Box px={3} py={2} style={{marginTop: '35px'}}>
          <Typography >
            Professional Information
          </Typography>
          <Divider/>
          <Grid container spacing={1}>
            <Grid item xs={12} sm={6}>
              

              <TextField
              variant="standard" 
                select
                fullWidth
                defaultValue={options[0]}
                label="Employment Status"
                {...register('employmentStatus')}
                margin="dense"
                error={errors.employmentStatus ? true : false}
                
              >
                {options.map((option) => (
                  <MenuItem 
                  key={option} value={option} style={{backgroundColor: "inherit !important"}}>
                    {option}
                  </MenuItem>
                ))}
              </TextField>
                    
              <Typography variant="inherit" color="textSecondary">
                {errors.employmentStatus?.message}
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
              variant="standard" 
                required
                id="company"
                label="Company"
                fullWidth
                margin="dense"
                {...register('company')}
                error={errors.company ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.company?.message}
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
              variant="standard" 
                required
                id="jobTitle"
                label="Job Title"
                fullWidth
                margin="dense"
                {...register('jobTitle')}
                error={errors.jobTitle ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.jobTitle?.message}
              </Typography>
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
              variant="standard" 
                required
                type={'number'}
                id="netIncome"
                label="Net Income"
                fullWidth
                margin="dense"
                {...register('netIncome')}
                error={errors.netIncome ? true : false}
                
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.netIncome?.message}
              </Typography>
            </Grid>
            
            <Grid item xs={12} sm={6}>
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
            
            <Grid item xs={12} sm={6}>
              <TextField
              variant="standard" 
                required
                id="confirmPassword"
                label="Confirm Password"
                type="password"
                fullWidth
                margin="dense"
                {...register('confirmPassword')}
                error={errors.confirmPassword ? true : false}
              />
              <Typography variant="inherit" color="textSecondary">
                {errors.confirmPassword?.message}
              </Typography>
            </Grid>
          </Grid>
        </Box>
    </div>
        </>}
      />
    </div>
  )
};

export default SignUp;
