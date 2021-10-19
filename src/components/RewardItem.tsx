import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import ImagePlaceholder from './ImagePlaceholder';

interface Props {
  name: string;
  needed_points: number;
  image: string;
  collected: boolean;
  onPressLink(): void;
}

const IMAGE_SIZE = 100;

const RewardItem: React.FC<Props> = ({
  name,
  needed_points,
  image,
  onPressLink,
  collected,
}) => {
  const collectedText = collected ? 'It is yours 🥳' : 'Collect Reward! 👏';

  const backgroundColor = collected ? 'khaki' : 'lightgrey';

  return (
    <View style={[styles.container, {backgroundColor}]}>
      {image ? (
        <Image
          borderRadius={IMAGE_SIZE}
          style={{height: IMAGE_SIZE, width: IMAGE_SIZE}}
          resizeMode={'cover'}
          source={{uri: image}}
        />
      ) : (
        <ImagePlaceholder size={IMAGE_SIZE} />
      )}
      <View style={{flex: 1, paddingLeft: 8}}>
        <Text numberOfLines={1} style={{fontWeight: '500', fontSize: 18}}>
          {name}
        </Text>
        <Text style={{paddingTop: 8}}>benötigte Punkte: {needed_points}</Text>
        <TouchableOpacity onPress={onPressLink} style={{paddingVertical: 6}}>
          <Text style={{color: 'blue', fontSize: 16}}>{collectedText}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    minHeight: 100,
    marginVertical: 8,
    padding: 8,
    borderRadius: 10,
  },
});

export default RewardItem;
