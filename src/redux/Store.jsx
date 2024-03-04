import { configureStore } from '@reduxjs/toolkit';
import dataReducer from './Reducer';

export const store = configureStore({
  reducer: {
    data: dataReducer,
  },
});
