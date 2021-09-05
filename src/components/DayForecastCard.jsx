import React from 'react'
import {Paper, Grid} from '@material-ui/core';

// styles
import '../styles/components/DayForecastCard.css';

export default function DayForecastCard({dayForecast}) {
  return (
    <Paper elevation={4} className="forecastCard-container">
      <Grid container>
        <Grid item xs={12}>
          <span>Date: {dayForecast.dateTime}</span>
        </Grid>
        <Grid item xs={5}>
          <h3>{dayForecast.main.temp} &#8457;</h3>
        </Grid>
        <Grid item xs={2}>
          <img src={dayForecast.weather.icon} alt="" />
        </Grid>
        <Grid item xs={5}>
          <h3>{dayForecast.weather.description}</h3>
        </Grid>
      </Grid>
    </Paper>
  )
}
