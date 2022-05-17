import React, { FC } from 'react';
import Badge, { BadgeProps } from '@mui/material/Badge';
import { styled } from '@mui/material/styles';
import styles from './Badge.module.scss';

interface BadgeNotificationProps {
  style?: any
  className?: string
  number: number
  max? : number
  sx? : any
}
const StyledBadge = styled(Badge)<BadgeProps >(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: 14,
    top: 7,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
  breakpoints: {
    // sm: 
  }
  
}));

const BadgeNotification: FC<BadgeNotificationProps> = (props: BadgeNotificationProps) => {
  const {style, className, number, max, sx} = props 
  return(
  <div className={styles.Badge} data-testid="Badge">
    <StyledBadge badgeContent={number} color="primary" style={style} className={className} max={max} sx={sx}>
    </StyledBadge>
  </div>
);
}
export default BadgeNotification;
