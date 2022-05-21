import React, { FC } from 'react';
import styles from './NavStats.module.scss';
import {Card, Badge, GridSystem, Carousel} from '../../../components'
import IconButton from '@mui/material/IconButton';

interface NavStatsProps {}

const NavStats: FC<NavStatsProps> = () => {

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
  <div className={styles.NavStats} data-testid="NavStats">
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
export default NavStats;
