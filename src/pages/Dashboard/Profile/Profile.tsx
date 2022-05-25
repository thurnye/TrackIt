import React, { FC } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import {Card, TextField} from '../../../components'
import styles from './Profile.module.scss';

interface ProfileProps {}

const Profile: FC<ProfileProps> = () => (
  <div className={styles.Profile} data-testid="Profile">
    <Card>
    <Box sx={{ flexGrow: 1 }}>
      <Grid container  spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        
        <Grid item xs={4}>
          Image
        </Grid>
        <Grid item xs={8}>
          Form
        </Grid>
      </Grid>
    </Box>

    </Card>
  </div>
);

export default Profile;
