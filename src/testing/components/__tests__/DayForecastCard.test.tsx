import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DayForecastCard from '../../../components/DayForecastCard';
import React from 'react';

describe('CurrentTemperatureCard', () => {
  beforeEach(() => {
    render(<DayForecastCard />);
  });
  it('should render', () => {
    render(<DayForecastCard />);
  });
});
