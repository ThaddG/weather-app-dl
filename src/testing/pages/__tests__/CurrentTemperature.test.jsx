import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentTemperature from '../../../pages/CurrentTemperature';

describe('CurrentTemperature', () => {
  it('should render', () => {
    render(<CurrentTemperature />);

  });
  
  it('should display header text', () => {
    render(<CurrentTemperature />);
    const headerText = screen.getByText(/Current Temperature/i);
    expect(headerText).toBeInTheDocument();
  });
});
