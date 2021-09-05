import { render } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from '../App';
import createTestStore from './createTestStore';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

let store;
describe('App component', () => {
  beforeEach(() => {
    store = createTestStore();
    render(
      <BrowserRouter>
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    );
  });

  it('should render', () => {
    expect(1).toBeLessThan(2);
  });
});
