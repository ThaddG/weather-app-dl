import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from './reducers/authReducer';
import { locationReducer } from './reducers/locationReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  location: locationReducer,
  // LIST ANY ADDED REDUCERS HERE
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
