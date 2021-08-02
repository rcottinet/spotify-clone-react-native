import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {Layout, Text, Button} from '@ui-kitten/components';
import {ThemeContext} from '../../theme-context';

import albumCategoriesArr from '../../SpotifyAssets/data/albumCategories';
import {AlbumCategorie} from '../components/AlbumCategorie';
import Header from '../components/Header.component';
export const HomeScreen = ({navigation}) => {
  const themeContext = React.useContext(ThemeContext);

  const albumCategorieList = albumCategoriesArr.map(albumCategorie => {
    return (
      <View style={styles.albumCategories} key={albumCategorie.id}>
        <AlbumCategorie
          id={albumCategorie.id}
          title={albumCategorie.title}
          albums={albumCategorie.albums}
          navigation={navigation}></AlbumCategorie>
      </View>
    );
  });

  return (
    <Layout style={styles.layout} level="2">
      <ScrollView
        style={styles.scrollView}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}>
        <View style={{marginTop: 100}}>
          <Header />
          {albumCategorieList}
        </View>
      </ScrollView>
    </Layout>
  );
};
const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
  },
  safeAreaView: {
    flex: 1,
  },
  albumCategories: {
    marginBottom: 20,
  },
});
