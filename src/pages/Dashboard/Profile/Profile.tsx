import React, { FC, useState, useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";
import {useDispatch, useSelector} from 'react-redux';
import { useForm} from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import {login, userSelector } from '../../../store/userSlice'
import api from '../../../Api/api';
import Divider from '@mui/material/Divider';
import {validationSchema} from '../../../utils/Validations' 
import Icon from '@mui/material/Icon';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import {Card} from '../../../components'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

import styles from './Profile.module.scss';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => {
  const user = useSelector(userSelector)
  // const [firstName, lastName, email, phone, employmentStatus, company, jobTitle, netIncome ] = user
  const dispatch = useDispatch()
  let navigate = useNavigate();
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [resetForm, setResetForm] = useState<boolean>(false)
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  useEffect(()=>{
    user && reset({
      firstName: user.firstName,
      lastName: user.lastName,
      phoneNumber: user.phone,
      email: user.email,
      employmentStatus: user.employmentStatus,
      company: user.company,
      jobTitle: user.jobTitle,
      netIncome: user.netIncome
    })
  },[resetForm])

  const options=[
    'Employed',
    'Unemployed',
    'Self-Employed',
    'Student',
    'Retired',
  ]

  const updateUser = async (data:any) => {
    try {
      console.log(JSON.stringify(data, null, 2));
      // const data:object = {}
      console.log("data:", data)
      // const newUser = await api.createAnAccount(data)
      // // console.log("newUser", newUser.data)
      // let token = newUser.data
      // localStorage.setItem('token', token);  
      // const user:any =  await jwt_decode(token); 
      // dispatch(login(user))
      // user && navigate(`/dashboard`);
    } catch (error) {
      console.log(error)
    }
  }
  
  return(
  <div className={styles.Profile} data-testid="Profile">
    {user && 
      <Card>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
          <Grid item xs={4}>
            Image
          </Grid>
          <Grid item xs={8}>
          <div>
        
        {/* Personal Information */}
          <Box px={3} py={2}>
            <div className={styles.ProfileEditDiv}>
              {!isEdit &&
            <Icon
                onClick={() => setIsEdit(true)}
                baseClassName="fas"
                className="fa-solid fa-pen"
                sx={{ color: 'black', ml:2 }}
                fontSize="small" 
              />
              }
            </div>
            <Typography >
              Basic Information
            </Typography>
            <Grid container spacing={1}>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard" 
                  required={isEdit}
                  id="firstName"
                  label="First Name"
                  fullWidth
                  defaultValue={user.firstName}
                  disabled={!isEdit}
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
                  required={isEdit}
                  defaultValue={user.lastName}
                  disabled={!isEdit}
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
                  required={isEdit}
                  id="email"
                  label="Email"
                  defaultValue={user.email}
                  disabled={!isEdit}
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
                  required={isEdit}
                  id="phoneNumber"
                  defaultValue={user.phone}
                  disabled={!isEdit}
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
                
                {isEdit ?<>
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
                </>
                : 
                <TextField
                  variant="standard" 
                  id="employmentStatus"
                  defaultValue={user.employmentStatus}
                  disabled={!isEdit}
                  label="Employment Status"
                  fullWidth
                  margin="dense"
                />
                }
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="standard" 
                  required={isEdit}
                  id="company"
                  label="Company"
                  fullWidth
                  defaultValue={user.company}
                  disabled={!isEdit}
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
                  required={isEdit}
                  id="jobTitle"
                  label="Job Title"
                  fullWidth
                  defaultValue={user.jobTitle}
                  disabled={!isEdit}
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
                  required={isEdit}
                  type={'number'}
                  id="netIncome"
                  label="Net Income"
                  fullWidth
                  defaultValue={user.netIncome}
                  disabled={!isEdit}
                  margin="dense"
                  {...register('netIncome')}
                  error={errors.netIncome ? true : false}
                  
                />
                <Typography variant="inherit" color="textSecondary">
                  {errors.netIncome?.message}
                </Typography>
              </Grid>
            </Grid>
          </Box>
      </div>
          </Grid>
        </Grid>
      </Box>
      <div className={styles.ProfileEditDiv}>
        {isEdit && <>
          <Button variant="text" onClick={()=> {setResetForm(!resetForm); setIsEdit(false)}}>Cancel</Button>
          <Button variant="text" onClick={handleSubmit(updateUser)}>Update</Button>
        </>
        }
      </div>
    
      </Card>
    }
  </div>
);
}
export default Profile;
