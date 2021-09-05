import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { locationReducer } from './reducers/locationReducer';
import { temperatureReducer } from './reducers/temperatureReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  temperature: temperatureReducer,
  // LIST ANY ADDED REDUCERS HERE
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
