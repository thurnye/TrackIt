import React, { FC } from 'react';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import styles from './Dashboard.module.scss';

interface DashboardProps {}

const Dashboard: FC<DashboardProps> = () => (
  <div className={styles.Dashboard} data-testid="Dashboard">
    Dashboard Component
  </div>
);

export default Dashboard;
