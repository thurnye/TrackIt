import React, { FC } from 'react';
import styles from './Subscriptions.module.scss';

interface SubscriptionsProps {}

const Subscriptions: FC<SubscriptionsProps> = () => (
  <div className={styles.Subscriptions} data-testid="Subscriptions">
    Subscriptions Component
  </div>
);

export default Subscriptions;
