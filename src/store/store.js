import { configureStore } from '@reduxjs/toolkit';
import itemsReducer from './itemsSlice';

const store = configureStore({ //.. 2
  reducer: {
    items: itemsReducer,
  },
});

export default store;
