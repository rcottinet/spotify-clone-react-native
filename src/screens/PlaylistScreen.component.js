import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Text, Layout} from '@ui-kitten/components';

export function PlaylistScreen() {
  return (
    <Layout style={styles.layout} level="2">
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Text category="h4">Playlist</Text>
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
