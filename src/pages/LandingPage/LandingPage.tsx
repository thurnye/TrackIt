import React,{FC, useEffect, useState} from 'react';
import { Link, useNavigate } from "react-router-dom";

import styles from './LandingPage.module.scss';
import {Button} from '../../components'
import Login from '../../components/NavBar/Login/Login';
import SignUp from '../../components/NavBar/SignUp/SignUp';


interface LandingPageProps {
  user:any
}

const LandingPage: FC<LandingPageProps> = (props:LandingPageProps) => {
  const {user} = props
  // const [auth, setAuth] = useState<any>(user)

  return ( 
  <div className={styles.LandingPage} data-testid="LandingPage">
    LandingPage Component
    {user && <Link to="/dashboard">Dashboard</Link>}
  </div>
)
};

export default LandingPage;
