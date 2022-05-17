import React, { FC } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


import styles from './Card.module.scss';

interface CardLayoutProps {
  style?: any
  className?: string
  children: React.ReactNode 
}


const CardLayout: FC<CardLayoutProps> = (props:CardLayoutProps) => {
  const {style, className, children} = props 
  return(
    <div className={styles.Card} data-testid="Card">
      <Card style={style} className={className}>
      <CardContent >
          {children}
      </CardContent>
    </Card>
    </div>
  );
}
export default CardLayout;
