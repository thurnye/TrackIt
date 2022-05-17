import React, { FC, useState } from 'react';
import {useSelector, useDispatch} from 'react-redux'
import {userSelector} from '../../../store/userSlice'
import {Card, Badge, GridSystem} from '../../../components'
import styles from './Home.module.scss';
interface HomeProps {
 
}

const Home: FC<HomeProps> = () => {
  const user = useSelector(userSelector)

  const notifications = [
    {
      name: 'Active Subscriptions',
      number: 14
    },
    {
      name: 'InActive Subscriptions',
      number: 3
    },
    {
      name: 'Total Payments',
      amount: 50,
      number: 14
    },
    {
      name: 'Upcoming Payments',
      amount: 30,
      number: 6
    },
  ]
  return(
    <div className={styles.Home} data-testid="Home">
      <Card>
        <GridSystem small={2} medium={4} large={4} className={styles.SummaryCardsGridContainer}>
        {notifications.map((el, index) => {
          const {name, amount, number} = el
          return (
          <div key={name} className={styles.SummaryCardContainer}>
              <Card className={styles.SummaryCard}>
                <p> 
                <span>{name}</span>
                {(amount  && amount >= 0) && <span className={styles.SummaryAmount}>${amount}</span>}
                </p>
              </Card> 
              <Badge number={number} max={10} className={styles.CardBadge}/>
          </div>
          )
        })}

        </GridSystem>
      </Card>
    </div>
  );
}
export default Home;
