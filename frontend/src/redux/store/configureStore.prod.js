import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import { routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createHashHistory';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from '../modules/reducers';

export const history = createHistory();

// createStore : enhancer
const enhancer = composeWithDevTools(applyMiddleware(thunkMiddleware, routerMiddleware(history)));

// export default =  "redux store"
export default function configureStore(initialState) {
  return createStore(reducer, initialState, enhancer);
}
