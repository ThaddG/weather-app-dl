import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../redux/reducers/authReducer';
import { locationReducer } from '../redux/reducers/locationReducer';
import { temperatureReducer } from '../redux/reducers/temperatureReducer';

export default function createTestStore() {
  const store = createStore(
    combineReducers({
      auth: authReducer,
      location: locationReducer,
      temperature: temperatureReducer,
    }),
    applyMiddleware(thunk)
  );
  return store;
}
