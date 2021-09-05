import React, {Fragment} from 'react';

// custom components
import DayForecastCard from '../components/DayForecastCard';

// redux
import { useDispatch, useSelector } from 'react-redux';
import { getFiveDayTemperature } from '../redux/actions/temperatureActions';

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
      {
        temperature.fiveDay.length && temperature.fiveDay.length > 0
        ? temperature.fiveDay.map((forecast, index) => (
          <Fragment key={index}>
            <DayForecastCard dayForecast={forecast} />
          </Fragment>
        ))
        : <p>Waiting for 5 Day Temps...</p>
      }
    </div>
  );
}
