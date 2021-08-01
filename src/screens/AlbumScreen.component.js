import React from 'react';
import {StyleSheet, View, ScrollView, Image} from 'react-native';
import {Text, Layout, Button, Icon} from '@ui-kitten/components';
import album from '../../SpotifyAssets/data/albumDetails';

const MenuIcon = props => <Icon {...props} name="more-vertical-outline" />;

const AlbumScreen = ({navigator, route}) => {
  return (
    <Layout style={styles.layout} level="2">
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={styles.header}>
          <Image source={{uri: album.imageUri}} style={styles.imageAlbum} />
          <Text category="h4" style={styles.title}>
            {album.name}
          </Text>
          <Text
            category="s1"
            style={styles.textAuthorLikeNumber}
            appearance="hint">
            BY {album.by.toUpperCase()} - {album.numberOfLikes} LIKES
          </Text>
          <Button style={styles.button}>PAUSE</Button>
        </View>
        <View style={styles.songList}>
          {album.songs.map(song => (
            <View style={styles.songView}>
              <Image source={{uri: song.imageUri}} style={styles.imageSong} />
              <View style={styles.songDesc}>
                <Text category="s1">{song.title}</Text>
                <Text category="s2" appearance="hint" style={styles.artistSong}>
                  {song.artist}
                </Text>
              </View>
              <View style={styles.songButton}>
                <Button appearance="ghost" accessoryLeft={MenuIcon} />
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Layout>
  );
};

export default AlbumScreen;

const styles = StyleSheet.create({
  header: {
    marginTop: 60,
    alignItems: 'center',
  },
  imageAlbum: {
    height: 200,
    width: 200,
    borderRadius: 5,
  },
  title: {
    marginTop: 30,
  },
  textAuthorLikeNumber: {
    marginTop: 20,
  },
  button: {
    marginTop: 10,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 30,
  },
  songList: {
    marginTop: 20,
    marginHorizontal: 5,
  },
  songView: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  songDesc: {
    justifyContent: 'center',
    paddingLeft: 10,
  },
  imageSong: {
    height: 80,
    width: 80,
  },
  titleSong: {},
  artistSong: {
    marginTop: 5,
  },
  songButton: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  layout: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
});
