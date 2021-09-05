import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DayForecastCard from '../../../components/DayForecastCard';
import React from 'react';

const testTemp = {
  dateTime: '2021-09-05 09:00:00',
  weather: {
    main: 'Clouds',
    description: 'overcast cloud',
    icon: 'http://openweathermap.org/img/wn/${code}@2x.png',
  },
  main: { temp: '66.65' },
};

describe('DayForecastCard', () => {
  beforeEach(() => {
    render(<DayForecastCard dayForecast={testTemp} />);
  });

  it('should display time', () => {
    const timeText = screen.getByText(/2021-09-05 09:00:00/i);
    expect(timeText).toBeInTheDocument();
  });

  it('should display the forecast temperature', () => {
    const tempText = screen.getByText(/66.65/i);
    expect(tempText).toBeInTheDocument();
  });

  it('should display weather description', () => {
    const descriptionText = screen.getByText(/overcast cloud/i);
    expect(descriptionText).toBeInTheDocument();
  });

  it('should display the weather icon', () => {
    const iconTag = screen.getByRole('img');
    expect(iconTag).toHaveAttribute(
      'src',
      'http://openweathermap.org/img/wn/${code}@2x.png'
    );
  });
});
