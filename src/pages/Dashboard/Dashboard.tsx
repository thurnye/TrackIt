import React, { FC } from 'react';
import styles from './Dashboard.module.scss';

interface DashboardProps {
  user:any
}

const Dashboard: FC<DashboardProps> = (props:DashboardProps) => {
  const {user} = props



  return(
    <div className={styles.Dashboard} data-testid="Dashboard">
      Dashboard Component
    </div>
  )
};

export default Dashboard;
