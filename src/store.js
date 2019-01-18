import {createStore, applyMiddleware, combineReducers} from 'redux';
import logger from 'redux-logger';
import userReducer from './Reducers/userReducer';
import mathReducer from './Reducers/mathReducer';
import thunk from 'redux-thunk';

const store = createStore(combineReducers({userReducer, mathReducer}), {}, applyMiddleware(logger, thunk));

export default store;
