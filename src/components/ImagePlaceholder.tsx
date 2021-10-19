import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ImagePlaceholder = ({size = 100}: {size: number}) => (
  <View
    style={[{height: size, width: size, borderRadius: size}, styles.container]}>
    <Text style={{fontSize: size / 2}} allowFontScaling={false}>
      🌟
    </Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
});

export default ImagePlaceholder;
