import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentTemperatureCard from '../../../components/CurrentTemperatureCard';

const testLocation = {
  city: 'Detroit',
  state: 'Michigan',
};

const testTemperature = {
  weather: {
    main: 'clear',
    description: 'clear sky'
  },
  main: {
    temp: 80
  }
};

describe('CurrentTemperatureCard', () => {
  beforeEach(() => {
    render(
      <CurrentTemperatureCard
        location={testLocation}
        temperature={testTemperature}
      />
    );
  });
  it('should render', () => {
    render(
      <CurrentTemperatureCard
        location={testLocation}
        temperature={testTemperature}
      />
    );
  });

  it('should display the city passed through props', () => {
    const cityText = screen.getByText(/Detroit/i);
    expect(cityText).toBeInTheDocument();
  });

  it('should display the state passed through props', () => {
    const stateText = screen.getByText(/Michigan/i);
    expect(stateText).toBeInTheDocument();
  });

  it('should display the location in a City, Name format', () => {
    const locationText = screen.getByText('Detroit, Michigan');
    expect(locationText).toBeInTheDocument();
  });

  it('should display the temperature given through props', () => {
    const tempText = screen.getByText(/80/i);
    expect(tempText).toBeInTheDocument();
  });

  it('should display the temperature description passed through props', () => {
    const descriptionText = screen.getByText('clear sky');
    expect(descriptionText).toBeInTheDocument();
  })
});
