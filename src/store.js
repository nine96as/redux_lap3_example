import { composeWithDevTools } from '@redux-devtools/extension';
import { applyMiddleware, legacy_createStore as createStore } from 'redux';
import { thunk } from 'redux-thunk';
import allReducers from './reducers';

const composedFunctions = composeWithDevTools(...[applyMiddleware(thunk)]);

const store = createStore(allReducers, composedFunctions);

export default store;
