import React, {useEffect} from 'react';
import {
  View,
  FlatList,
  StyleSheet,
  TouchableWithoutFeedback,
} from 'react-native';
import {Text} from '@ui-kitten/components';
import Album from './Album';
export const AlbumCategorie = props => {
  const {id, title, albums} = props;
  // export const AlbumCategorie = ({id, title, albums}, navigation) => {
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
          <TouchableWithoutFeedback
            onPress={() => props.navigation.navigate('AlbumScreen')}>
            <View style={styles.album}>
              <Album key={item.id} {...item}></Album>
            </View>
          </TouchableWithoutFeedback>
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
