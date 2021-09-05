import React from 'react';

// custom components
import CurrentTemperatureCard from '../components/CurrentTemperatureCard';

// redux
import { useSelector } from 'react-redux';

// test data
const testTemp = {
  description: 'some light drizzle',
  degrees: 80
}

export default function CurrentTemperature() {
  const location = useSelector((state) => state.location);

  console.log('LOCATION:', location);
  return (
    <div>
      <h1>Current Temperature</h1>
      {location.address ? (
        <CurrentTemperatureCard
          location={location}
          temperature={testTemp}
        />
      ) : (
        <p>Waiting for location ...</p>
      )}
    </div>
  );
}
