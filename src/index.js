
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import {createStore, combineReducers, applyMiddleware} from 'redux';
import logger from "redux-logger";



const mathReducer = (state = {
  result: 1,
  lastValues: []
}, action) => {
  switch(action.type){
    case "ADD":
      state = {
        ...state,
        result: state.result + action.payload,
        lastValues: [...state.lastValues, action.payload]
      }
      break;
      case "SUBSTRACT":
        state = {
          ...state,
          result: state.result - action.payload,
          lastValues: [...state.lastValues, action.payload]
        }
        break;
  }
  return state;
}

const userReducer = (state = {
  name: "Gleb",
  age: 22
}, action) => {
  switch(action.type){
    case "SET_NAME":
      state = {
        ...state,
        name: action.payload}
      break;
      case "SET_AGE":
        state = {
          ...state,
          age: action.payload
        }
        break;
  }
  return state;
}

const myLogger = (store) => (next) => (action) => {
  console.log("Action: ", action);
  next(action);
}

const store = createStore(combineReducers({mathReducer, userReducer}), {}, applyMiddleware(logger));

store.subscribe(()=>{
  console.log("Store changed", store.getState());
})

store.dispatch({
  type: "ADD",
  payload: 25
})

store.dispatch({
  type: "ADD",
  payload: 11
})

store.dispatch({
  type: "ADD",
  payload: 7
})

store.dispatch({
  type: "SET_AGE",
  payload: 26
})

store.dispatch({
  type: "SET_NAME",
  payload: "Ignat"
})

store.dispatch({
  type: "SET_AGE",
  payload: 16
})

ReactDOM.render(<App />, document.getElementById('root'));
