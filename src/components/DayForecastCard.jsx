import React from 'react';
import { Paper, Grid } from '@material-ui/core';

// styles
import '../styles/components/DayForecastCard.css';

export default function DayForecastCard({ dayForecast }) {
  return (
    <Paper elevation={4} className="forecastCard-container">
      <Grid container>
        <Grid item xs={12}>
          <strong>{dayForecast.dateTime}</strong>
        </Grid>
        <Grid item xs={12}>
          <p className="forecastCard-temp-text">
            {dayForecast.main.temp} &#8457;
          </p>
        </Grid>
        <Grid item xs={6}>
          <img src={dayForecast.weather.icon} alt="weather-icon" />
        </Grid>
        <Grid item xs={6} className="forecastCard-description-text">
          <h3>{dayForecast.weather.description}</h3>
        </Grid>
      </Grid>
    </Paper>
  );
}
