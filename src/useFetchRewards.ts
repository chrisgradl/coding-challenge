import React from 'react';
import fetchRewards, {Reward} from './api/fetchRewards';

interface FetchState {
  state: 'loading' | 'error' | 'success' | 'idle';
  data?: Reward[];
  error?: Error;
}

//i used a simple hook for fetching, i prefer react-query for data fetching
//depending on the use case it could also make sense to store the server state in redux
export default function useFetchRewards() {
  const [rewardState, setRewardState] = React.useState<FetchState>({
    state: 'idle',
  });

  const fetchData = React.useCallback(() => {
    //TODO check if component is mounted, so setState is not called on an unmounted component
    setRewardState({state: 'loading'});
    fetchRewards()
      .then(data => {
        setRewardState({state: 'success', data});
      })
      .catch(e => setRewardState({state: 'error', error: e}));
  }, [setRewardState]);

  React.useEffect(() => {
    //TODO refetch list when app was in background
    //TODO clean up function: cancel request when app gets unmounted
    fetchData();
  }, [fetchData]);

  return {rewardState, refetch: fetchData};
}
