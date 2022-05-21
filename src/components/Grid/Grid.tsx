import React, { FC } from 'react';
import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import styles from './Grid.module.scss';

interface GridSystemProps {
  small? : number
  medium? : number
  large? : number
  // numberOfItems: number
  children?: React.ReactNode
  style?: any
  className?: string
}

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'initial',
  color: theme.palette.text.secondary,
}));

const GridSystem: FC<GridSystemProps> = (props:GridSystemProps) => {
  const {small, medium,large, children, style, className} = props
  return(
  <div className={styles.Grid} data-testid="Grid">
    <Box sx={{ flexGrow: 1 }}>
          <Grid  spacing={{ xs: 4, md: 6 }} columns={{ xs: 12, sm: 4, md: 12 }} className={className} style={style} item xs={small} sm={medium} md={large} >
            {children}
          </Grid>
    </Box>
  </div>
);
}
export default GridSystem;
