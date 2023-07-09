/* eslint-disable prettier/prettier */
import {createStore, applyMiddleware, compose} from 'redux';
// import logger from 'redux-logger';
import thunk from 'redux-thunk';
import reducers from './reducers';

// Apply middleware
const middleware = [thunk];

// Check if Redux DevTools extension is available
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Create store with middleware and Redux DevTools extension
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware)),
);

export default store;
