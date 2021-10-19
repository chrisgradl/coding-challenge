/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, StatusBar} from 'react-native';
import RewardList from './src/components/RewardList';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';
import RewardCount from './src/components/RewardCount';

const App = () => {
  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar barStyle={'light-content'} />
        <RewardCount />
        <RewardList />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
