import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import React from 'react';
import FiveDayTemperature from '../../../pages/FiveDayTemperature';
import createTestStore from '../../createTestStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let store;
describe('FiveDayTemperature', () => {
  beforeEach(() => {
    store = createTestStore();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <FiveDayTemperature />
        </Provider>
      </BrowserRouter>
    );
  });

  it('should display header text', () => {
    const headerText = screen.getByText(/5 Day Temperature/i);
    expect(headerText).toBeInTheDocument();
  });
});
