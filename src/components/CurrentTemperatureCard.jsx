import React from 'react';
import { Grid, Paper } from '@material-ui/core';

export default function CurrentTemperatureCard({ location, temperature }) {
  return (
    <Paper elevation={6}>
      <Grid container>
        <Grid item xs={12} md={5}>
          <h3>
            {location.city}, {location.state}
          </h3>
        </Grid>
        <Grid item xs={12} md={7}>
          <h3>{temperature.main.temp} &#8457;</h3>
          <h4>{temperature.weather.description}</h4>
        </Grid>
      </Grid>
    </Paper>
  );
}
