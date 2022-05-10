import React, { FC } from 'react';
import { Link } from "react-router-dom";
import styles from './HomePage.module.scss';

interface HomePageProps {}

const HomePage: FC<HomePageProps> = () => (
  <div className={styles.HomePage} data-testid="HomePage">
    HomePage Component
    <Link to="/dashboard">Dashboard</Link>
  </div>
);

export default HomePage;
