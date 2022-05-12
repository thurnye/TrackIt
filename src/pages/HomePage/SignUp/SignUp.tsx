import React, { FC, useState, useEffect } from 'react';
import jwt_decode from "jwt-decode";
import {useDispatch} from 'react-redux';
import {userActions } from '../../../store/userSlice'
import { Dialog, TextField, Select, Alert } from '../../../components';
import api from '../../../Api/api';
import styles from './SignUp.module.scss';


interface SignUpProps {}

const SignUp: FC<SignUpProps> = () => {
  const dispatch = useDispatch()
  const [open, setOpen] = useState<boolean>(true)
  const [firstName, setFirstName] = useState<string>('')
  const [lastName, setLastName] = useState<string>('')
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')
  const [confirmedPassword, setConfirmedPassword] = useState<string>('')
  const [phone, setPhone] = useState<string| number>('')
  const [employmentStatus, setEmploymentStatus] = useState<string>("Employed")
  const [company, setCompany] = useState<string>('')
  const [jobTitle, setJobTitle] = useState<string>('')
  const [netIncome, setNetIncome] = useState<string| number>('')
  const [disabled, setDisabled] = useState<boolean>(true)
  const [passwordError, setPasswordError] = useState<boolean>(false)

  const [passwordType, setPasswordType] = React.useState<string>('password')

  const handleClick = () => {
    setOpen(true)
  }
  
  const handleClose = () => {
    setOpen(false)
    setFirstName('')
    setLastName('')
    setPhone('')
    setEmail('')
    setPassword('')
    setConfirmedPassword('')
    setEmploymentStatus('Employed')
    setCompany('')
    setJobTitle('')
    setNetIncome('')
    setPasswordError(false)
    setDisabled(true)
  }


  useEffect(() => {
    if(
      !firstName || firstName === '' || !lastName || lastName === '' || !phone || phone === '' || !email || email === '' || !password || password === '' || !confirmedPassword || confirmedPassword === '' || !employmentStatus || employmentStatus === '' || !company || company === '' || !jobTitle || jobTitle === '' || !netIncome || netIncome === '' || netIncome <= 0){
        setDisabled(true)
    }else{
      setDisabled(false)
    }
 
  },[firstName, lastName, phone, email, password, employmentStatus, company, jobTitle, netIncome, confirmedPassword])



  const handleSignUp = async () => {
    try {
      if(password !== confirmedPassword){
        setPasswordError(true)
        setDisabled(true)
        return;
      }
      const data:object = {
        firstName : firstName,
        lastName : lastName,
        phone : phone,
        email : email,
        password : password,
        employmentStatus : employmentStatus,
        company : company,
        jobTitle : jobTitle,
        netIncome : netIncome,
      }
      console.log("data:", data)
      const newUser = await api.createAnAccount(data)
      console.log("newUser", newUser)
      let token = newUser.data
      localStorage.setItem('token', token);  
      const user = jwt_decode(token); 
      // store the user in redux state
      dispatch(userActions.login({
        user: user
      }))
      
    } catch (error) {
      console.log(error)
    }
  }
  

  
  return (
    <div className={styles.SignUp} data-testid="SignUp">
      <Dialog
        label="SignUp"
        title="Create an Account"
        open={open}
        onClose={() => handleClose()}
        onClick={handleClick}
        actions={[
          {
            label: "SignUp",
            onClick: () => handleSignUp(),
            disabled: disabled
          }
        ]}
        children = {<>
          {passwordError && <Alert severity="error" text="Passwords do not match!"/>}
        {/* Basic Information */}
        <div>
          <TextField
            label='First Name'
            name='firstName'
            value={firstName}
            type='text'
            onChange={(e:any) => setFirstName(e.target.value)}
          />
          <TextField
          label='Last Name'
            name='lastName'
            value={lastName}
            type='text'
            onChange={(e:any) => setLastName(e.target.value)}
          />
        </div>
        
        <TextField
          label='Email'
          name='email'
          value={email}
          type='email'
          onChange={(e:any) => setEmail(e.target.value)}
        />
        
        <TextField
          label='Phone'
          name='phoneNumber'
          value={phone}
          type='number'
          onChange={(e:any) => setPhone(e.target.value)}
        />

        {/* Professional Information */}
          <Select
          value={employmentStatus} 
          name="EmploymentStatus"
          onChange={(e:any) => setEmploymentStatus(e.target.value)}
          options={[
            {label: 'Employed', value: "Employed"},
            {label: 'Unemployed', value: "Unemployed"},
            {label: 'Self-Employed', value: "Self-Employed"},
            {label: 'Student', value: "Student"},
            {label: 'Retired', value: "Retired"}
          ]}
          />
          <TextField
            label='Company'
            name='Company'
            value={company}
            type='string'
            onChange={(e:any) => setCompany(e.target.value)}
          />
          <TextField
            label='Job Title'
            name='JobTitle'
            value={jobTitle}
            type='string'
            onChange={(e:any) => setJobTitle(e.target.value)}
          />
          <TextField
            label='Net Income'
            name='netIncome'
            value={netIncome}
            type='number'
            onChange={(e:any) => setNetIncome(e.target.value)}
            position="start"
            symbol={"$"}
          />
          <div>
          <TextField
          label='Password'
          name='password'
          value={password}
          type={passwordType}
          onChange={(e:any) => setPassword(e.target.value)}
          position="end"
          changeType={() => setPasswordType('text')}

        />
        <TextField
          label='Confirm Password'
          name='ConfirmedPassword'
          value={confirmedPassword}
          type='password'
          onChange={(e:any) => setConfirmedPassword(e.target.value)}
          position="end"

        />
          </div>
        </>}
      />
    </div>
  )
};

export default SignUp;
