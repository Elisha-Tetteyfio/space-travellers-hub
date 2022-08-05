import { configureStore } from '@reduxjs/toolkit';
import missions from './missions';
import rocketReducer from './rockets';

const store = configureStore({
  reducer: {
    rocket: rocketReducer,
    missions,
  },
});

export default store;
