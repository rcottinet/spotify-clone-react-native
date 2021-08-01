import React from 'react';
import {StyleSheet, SafeAreaView, ScrollView} from 'react-native';
import {Text, Layout, Button} from '@ui-kitten/components';
import {ThemeContext} from '../../theme-context';

export function SearchScreen() {
  const themeContext = React.useContext(ThemeContext);

  return (
    <Layout style={styles.layout} level="2">
      <SafeAreaView style={styles.safeAreaView}>
        <ScrollView style={styles.scrollView}>
          <Text category="h4">Recherche</Text>
          <Button
            style={{marginVertical: 4, width: 100}}
            onPress={themeContext.toggleTheme}>
            TOGGLE THEME
          </Button>
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
