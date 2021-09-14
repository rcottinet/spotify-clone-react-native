import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView, View} from 'react-native';
import {Text, Layout, Button} from '@ui-kitten/components';
import {SearchBar} from '../components/SearchBar.component';
export function SearchScreen() {

  return (
    <Layout style={styles.layout} level="2">
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Text category="h4">Recherche</Text>
          <View style={styles.searchBar}>
            <SearchBar />
          </View>

          
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
  searchBar: {
    marginTop: 20,
  },
});
