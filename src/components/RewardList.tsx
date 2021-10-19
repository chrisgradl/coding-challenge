import React from 'react';
import {
  ActivityIndicator,
  Button,
  RefreshControl,
  ScrollView,
  Text,
  View,
} from 'react-native';
import RewardItem from './RewardItem';
import {useDispatch, useSelector} from 'react-redux';
import {collectReward, selectRewards} from '../redux/RewardsReducer';
import useFetchRewards from '../useFetchRewards';

const RewardList: React.FC = () => {
  const {rewardState, refetch} = useFetchRewards();

  const dispatch = useDispatch();

  const rewards = useSelector(selectRewards);

  if (rewardState.state === 'loading' && !rewardState.data) {
    return <ActivityIndicator size={'large'} style={{padding: 16}} />;
  }

  if (rewardState.error) {
    return (
      <View style={{padding: 16}}>
        <Text>Fehler beim Laden der Daten: {rewardState.error?.message}</Text>
        <Button onPress={refetch} title={'Neu Laden'} />
      </View>
    );
  }

  //TODO: use Flatlist instead
  return (
    <ScrollView
      refreshControl={
        <RefreshControl
          refreshing={rewardState.state === 'loading'}
          onRefresh={refetch}
        />
      }
      style={{paddingHorizontal: 16, paddingVertical: 8}}>
      {rewardState.data?.map(r => (
        <RewardItem
          {...r}
          key={r.id}
          collected={Boolean(rewards[r.id])}
          onPressLink={() => {
            if (!Boolean(rewards[r.id])) {
              dispatch(collectReward(r));
            }
          }}
        />
      ))}
    </ScrollView>
  );
};

export default RewardList;
