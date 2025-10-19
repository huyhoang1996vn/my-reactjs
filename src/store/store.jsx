import reducer from '../reducer/counter'
import addItemReducer from '../reducer/addItemReducer'
import expressDataReducer from '../reducer/expressDataReducer'

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    reducer,
    addItemReducer,
    expressDataReducer
  }
});

// console.log(store.getState());

export default store;