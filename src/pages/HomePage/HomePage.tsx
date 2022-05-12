import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from './HomePage.module.scss';
import Login from './Login/Login';
import SignUp from './SignUp/SignUp';


interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    HomePage Component
    <Link to="/dashboard">Dashboard</Link>
    <Login/>
    <SignUp/>
  </div>
);

export default HomePage;
