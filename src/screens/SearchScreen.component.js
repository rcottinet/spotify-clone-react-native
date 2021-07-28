import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';
import Album from '../components/Album';
export function SearchScreen() {
  // album = {
  //   id: '1',
  //   imageUri:
  //     'https://cache.boston.com/resize/bonzai-fba/Globe_Photo/2011/04/14/1302796985_4480/539w.jpg',
  //   artistsHeadline: 'Taylor Swift, Kygo Objective C, Avicii',
  // };

  return (
    <Layout style={styles.layout} level="2">
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Text category="h4">Recherche</Text>
          {/* <Album {...album}></Album> */}
        </ScrollView>
      </SafeAreaView>
    </Layout>
  );
}
const styles = StyleSheet.create({
  layout: {
    flex: 1,
  },
  scrollView: {
    flex: 1,
    marginHorizontal: 20,
  },
  safeAreaView: {
    flex: 1,
  },
});
