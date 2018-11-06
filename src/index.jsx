// external modules
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import { logger } from 'redux-logger';
import reduxPromise from 'redux-promise';

// internal modules
import App from './components/app';
import '../assets/stylesheets/application.scss';

// State and reducers
import messagesReducer from './reducers/messages_reducer.js';
import selectedChannelReducer from './reducers/selected_channel_reducer.js';

const identityReducer = (state = null) => state;

const initialState = {
  channels: ['react', 'general', 'paris'],
  messages: [],
  selectedChannel: 'general',
  userName: 'amine'
  // userName: prompt('what is your username ?') || `anonymos${10 + (90 * Math.random())}`
}

const reducers = combineReducers({
  channels: identityReducer,
  messages: messagesReducer,
  selectedChannel: selectedChannelReducer,
  userName: identityReducer
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const middlewares = composeEnhancers(applyMiddleware(reduxPromise, logger));

// render an instance of the component in the DOM
ReactDOM.render(
  <Provider store={createStore(reducers, initialState, middlewares)}>
    <App />
  </Provider>,
  document.getElementById('root')
);
