import reducer from '../reducer/counter'
import addItemReducer from '../reducer/addItemReducer'


import { createStore } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';

const reducers = combineReducers({
  reducer,
  addItemReducer
});

const store = createStore(reducers)
// console.log(store.getState());

export default store;