import React, { FC, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {userSelector} from '../../../store/userSlice'
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import {Charts} from '../../../components'


import styles from './Home.module.scss';


interface HomeProps {
 
}

const Home: FC<HomeProps> = () => {
  const user = useSelector(userSelector)

  
  return(
    <div className={styles.Home} data-testid="Home">
      <Charts/>
    </div>
  );
}
export default Home;
