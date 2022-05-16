import React, { FC, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import styles from './Home.module.scss';
import {userSelector} from '../../../store/userSlice'
interface HomeProps {
 
}

const Home: FC<HomeProps> = () => {
  const user = useSelector(userSelector)

  console.log(user)
  return(
    <div className={styles.Home} data-testid="Home">
      Home Component
    </div>
  );
}
export default Home;
