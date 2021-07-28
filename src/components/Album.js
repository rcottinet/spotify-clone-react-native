import React from 'react';
import {StyleSheet, View, Image} from 'react-native';
import {Text} from '@ui-kitten/components';
import {useEffect} from 'react';

const Album = ({id, imageUri, artistsHeadline}) => {
  //   useEffect(() => {
  //     console.log(id, imageUri, artistsHeadline);
  //   });

  return (
    <View style={styles.view}>
      <Image source={{uri: imageUri}} style={styles.image} />
      <Text category="s1" style={styles.text}>
        {artistsHeadline}
      </Text>
    </View>
  );
};

export default Album;

const styles = StyleSheet.create({
  view: {
    width: 150,
  },
  image: {
    height: 150,
    width: 150,
    borderRadius: 5,
  },
  text: {
    marginTop: 5,
  },
});
