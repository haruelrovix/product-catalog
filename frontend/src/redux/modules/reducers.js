import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

const appReducers = {};

// combine reducers -> createStore reducer
const reducers = combineReducers({
  ...appReducers,
  routing: routerReducer,
});

export default reducers;
