import React, { FC, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {userSelector} from '../../../store/userSlice'
import Grid from '@mui/material/Grid';
import {Card, Badge, GridSystem, Carousel} from '../../../components'


import styles from './Home.module.scss';


interface HomeProps {
 
}

const Home: FC<HomeProps> = () => {
  const user = useSelector(userSelector)

  
  return(
    <div className={styles.Home} data-testid="Home">
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(3)).map((_, index) => (
          <Grid item xs={12} sm={4} md={4} key={index}>
            <Card>
              {index}
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}
export default Home;
