import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import App from './App'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import reducer from './reducer/counter'
import addItemReducer from './reducer/addItemReducer'


import { createStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  reducer,
  addItemReducer
});

const store = createStore(reducers)
console.log(store.getState());


ReactDOM.render(
  <Provider store={store}>
  <Router>
    <App />
  </Router>
  </Provider>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
