import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export default function CurrentTemperatureCard({ location, temperature }) {
  return (
    <Paper>
      <Grid container>
        <Grid item xs={12} md={5}>
          <h3>
            {location.city}, {location.state}
          </h3>
        </Grid>
        <Grid item xs={12} md={7}>
          <h3>{temperature.degrees}</h3>
          <h4>{temperature.description}</h4>
        </Grid>
      </Grid>
    </Paper>
  );
}