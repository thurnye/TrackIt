import React, { FC } from 'react';
import styles from './Drawer.module.scss';

interface DrawerProps {}

const Drawer: FC<DrawerProps> = () => (
  <div className={styles.Drawer} data-testid="Drawer">
    Drawer Component
  </div>
);

export default Drawer;
