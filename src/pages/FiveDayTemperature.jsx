import React, { Fragment } from 'react';
import { Grid } from '@material-ui/core';

// custom components
import DayForecastCard from '../components/DayForecastCard';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getFiveDayTemperature } from '../redux/actions/temperatureActions';

// styles
import '../styles/pages/FiveDayTemperature.css';

export default function FiveDayTemperature() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const temperature = useSelector((state) => state.temperature);

  React.useEffect(() => {
    if (location.latitude) {
      dispatch(getFiveDayTemperature(location.latitude, location.longitude));
    }
  }, [location.latitude]);

  return (
    <div>
      <h1>5 Day Temperature</h1>
      {temperature.fiveDay.length && temperature.fiveDay.length > 0 ? (
        temperature.fiveDay.map((section, index) => (
          <Grid container>
            <Grid item xs={12}>
              <h2 className="five-day-temp-day-text">Day {index + 1}</h2>
              <div className="five-day-temp-day-section-container">
                {section.map((item, index) => (
                  <Fragment key={index}>
                    <DayForecastCard dayForecast={item} />
                  </Fragment>
                ))}
              </div>
            </Grid>
          </Grid>
        ))
      ) : (
        <p>Gathering 5 Day Temps...</p>
      )}
    </div>
  );
}
