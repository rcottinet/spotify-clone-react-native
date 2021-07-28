import React, {useEffect} from 'react';
import {View, FlatList, StyleSheet} from 'react-native';
import {Text} from '@ui-kitten/components';
import Album from './Album';

export const AlbumCategorie = ({id, title, albums}) => {
  // useEffect(() => {
  //   console.log(albums);
  // }, []);

  return (
    <View>
      <Text category="h4" style={styles.title}>
        {title}
      </Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        data={albums}
        renderItem={({item}) => (
          <View style={styles.album}>
            <Album {...item}></Album>
          </View>
        )}
        keyExtractor={album => album.id}
        style={styles.flatList}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    marginLeft: 10,
  },
  flatList: {
    marginTop: 20,
  },
  album: {
    marginLeft: 10,
  },
});
