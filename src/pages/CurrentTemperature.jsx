import React from 'react';

// custom components
import CurrentTemperatureCard from '../components/CurrentTemperatureCard';

// redux
import { useSelector, useDispatch } from 'react-redux';
import { getCurrentTemperature } from '../redux/actions/temperatureActions';

export default function CurrentTemperature() {
  const dispatch = useDispatch();
  const location = useSelector((state) => state.location);
  const temperature = useSelector((state) => state.temperature);

  React.useEffect(() => {
    if (location.latitude) {
      dispatch(getCurrentTemperature(location.latitude, location.longitude));
    }
  }, [location.latitude]);
  return (
    <div>
      <h1>Current Temperature</h1>
      {location.address ? (
        <CurrentTemperatureCard
          location={location}
          temperature={temperature.current}
        />
      ) : (
        <p>Waiting for location ...</p>
      )}
    </div>
  );
}
