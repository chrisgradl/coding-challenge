import {configureStore} from '@reduxjs/toolkit';
import rewardReducer from './RewardsReducer';

export const store = configureStore({
  reducer: {
    rewards: rewardReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
