import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import {thunk} from 'redux-thunk'

import { reduceruser } from './reducer/reducerUser';
import { error_reducer } from './reducer/reducerError';

const rootreducer=combineReducers({
  
  allusers:reduceruser,
  errors:error_reducer
})
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(rootreducer, /* preloadedState, */ composeEnhancers(

    applyMiddleware(thunk)
  ));