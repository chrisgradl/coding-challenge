import React from 'react';
import {Button, Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {StyleSheet} from 'react-native';
import {resetRewards, selectRewardCount} from '../redux/RewardsReducer';

const RewardCount: React.FC = () => {
  const rewardCount = useSelector(selectRewardCount);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text>
        Gesammelte Rewards:
        <Text style={{fontWeight: 'bold'}}>{rewardCount}</Text>
      </Text>
      <Button onPress={() => dispatch(resetRewards())} title={'Reset'} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: 'white',
    padding: 16,
    paddingVertical: 8,
    borderBottomWidth: 0.5,
    borderColor: 'grey',
  },
});

export default RewardCount;
