import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { locationReducer } from './reducers/locationReducer';
import { temperatureReducer } from './reducers/temperatureReducer';

const rootReducer = combineReducers({
  location: locationReducer,
  temperature: temperatureReducer,
  // LIST ANY ADDED REDUCERS HERE
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
