import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import CurrentTemperature from '../../../pages/CurrentTemperature';
import createTestStore from '../../createTestStore';
import {Provider} from 'react-redux';

let store;
describe('CurrentTemperature', () => {

  beforeEach(() => {
    store = createTestStore();
    render(
      <Provider store={store}>
        <CurrentTemperature />
      </Provider>
    )
  })
  
  it('should display header text', () => {
    const headerText = screen.getByText(/Current Temperature/i);
    expect(headerText).toBeInTheDocument();
  });
});
