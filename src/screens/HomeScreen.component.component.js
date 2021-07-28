import React from 'react';
import {
  StyleSheet,
  SafeAreaView,
  ScrollView,
  View,
  FlatList,
} from 'react-native';
import {Text, Layout, Button, Divider, Card} from '@ui-kitten/components';
import {ThemeContext} from '../../theme-context';

import albumCategoriesArr from '../../SpotifyAssets/data/albumCategories';
import {AlbumCategorie} from '../components/AlbumCategorie';
import {useEffect} from 'react';

export const HomeScreen = () => {
  const themeContext = React.useContext(ThemeContext);
  const renderItem = ({item}) => <Item title={item.title} />;

  const albumCategorieList = albumCategoriesArr.map(albumCategorie => {
    return (
      <View style={styles.albumCategories}>
        <AlbumCategorie
          key={albumCategorie.id}
          {...albumCategorie}></AlbumCategorie>
      </View>
    );
  });

  return (
    <Layout style={styles.layout} level="2">
      <SafeAreaView style={styles.safeAreaView}>
        <Button style={{marginVertical: 4}} onPress={themeContext.toggleTheme}>
          TOGGLE THEME
        </Button>
        <ScrollView
          style={styles.scrollView}
          showsVerticalScrollIndicator={false}
          showsHorizontalScrollIndicator={false}>
          {albumCategorieList}
        </ScrollView>
      </SafeAreaView>
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
