import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from './store';
import {Reward} from '../api/fetchRewards';

//TODO: i would make sure that no duplicated data is stored in redux state,
// only store the IDs and not the complete reward object

//key value store for Rewards is easier to handle than an array
type RewardState = Record<string, Reward>;

const initialState: RewardState = {};

export const rewardSlice = createSlice({
  name: 'rewards',
  initialState,
  reducers: {
    collectReward: (state, action: PayloadAction<Reward>) => {
      const {payload} = action;
      // redux-toolkit uses immer, so we can mutate the state
      state[payload.id] = payload;
    },
    resetRewards: () => ({}),
  },
});

export const {collectReward, resetRewards} = rewardSlice.actions;
export const selectRewards = (state: RootState) => state.rewards;
export const selectRewardCount = (state: RootState) =>
  Object.values(state.rewards).length;

export default rewardSlice.reducer;
