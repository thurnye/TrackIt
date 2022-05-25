import * as Yup from 'yup';
import "yup-phone";


export const validationSchema = Yup.object().shape({
    firstName: Yup.string().required('First name is required'),
    lastName: Yup.string().required('Last name is required'),
    company: Yup.string().required('Company is required'),
    jobTitle: Yup.string().required('Job title is required'),
    employmentStatus: Yup.string().required('Employment  Status is required'),
    netIncome: Yup.number().positive('number is invalid').integer('Net income must be number greater than 100')
      .min(100, 'Net income must be at least 3 characters').required('NetIncome is required'),
    email: Yup.string()
      .required('Email is required')
      .email('Email is invalid'),
    phoneNumber: Yup.string()
      .phone()
      .required('Invalid phone number'),
    password: Yup.string()
      .required('Password is required')
      .min(6, 'Password must be at least 6 characters')
      .max(40, 'Password must not exceed 40 characters'),
    confirmPassword: Yup.string()
      .required('Confirm Password is required')
      .oneOf([Yup.ref('password'), null], 'Confirm Password does not match'),
  });