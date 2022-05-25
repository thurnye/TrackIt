import React, { FC } from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import BarChart from './BarChart/BarChart';
import LineChart from './LineChart/LineChart'
import DonutChart from './DonutChart/DonutChart';
import Range from './Range/Range'
import styles from './Charts.module.scss';
import {Card} from '../Card'

interface ChartsProps {}

const Charts: FC<ChartsProps> = () => (
  <div className={styles.Charts} data-testid="Charts">
    <Box sx={{ flexGrow: 1 , padding: 0}}>
        <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }} sx={{padding: 0}}>

            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <LineChart/>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card 
              // style={{maxWidth: "200px", overflow: "auto"}}
              >
                <BarChart/>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <DonutChart/>
              </Card>
            </Grid>
            <Grid item xs={12} sm={12} md={6}>
              <Card>
                <Range/>
              </Card>
            </Grid>

        </Grid>

      </Box>
  </div>
);

export default Charts;
