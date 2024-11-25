


import { configureStore } from '@reduxjs/toolkit';
import innerPageCardReducer from './innerPageCardAmin/innerPageCardSlice';

const store = configureStore({
  reducer: {
    innerPageCard: innerPageCardReducer,
  },
});

export default store; 
