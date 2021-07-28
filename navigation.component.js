import React from 'react';
import {SafeAreaView} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {BottomNavigation, BottomNavigationTab} from '@ui-kitten/components';
import {HomeScreen} from './src/screens/HomeScreen.component.component';
import {SearchScreen} from './src/screens/SearchScreen.component';
import {PlaylistScreen} from './src/screens/PlaylistScreen';

import {Icon, Layout} from '@ui-kitten/components';

const {Navigator, Screen} = createBottomTabNavigator();

const HomeIcon = props => <Icon {...props} name="home-outline" />;

const SearchIcon = props => <Icon {...props} name="search-outline" />;

const PlaylistIcon = props => <Icon {...props} name="speaker-outline" />;

const BottomTabBar = ({navigation, state}) => (
  <Layout level="1">
    <SafeAreaView>
      <BottomNavigation
        appearance="noIndicator"
        selectedIndex={state.index}
        onSelect={index => navigation.navigate(state.routeNames[index])}>
        <BottomNavigationTab title="Accueil" icon={HomeIcon} />
        <BottomNavigationTab title="Recherche" icon={SearchIcon} />
        <BottomNavigationTab title="Bibliotèque" icon={PlaylistIcon} />
      </BottomNavigation>
    </SafeAreaView>
  </Layout>
);

const TabNavigator = () => (
  <Navigator tabBar={props => <BottomTabBar {...props} />}>
    <Screen name="Home" component={HomeScreen} />
    <Screen name="Search" component={SearchScreen} />
    <Screen name="Playlist" component={PlaylistScreen} />
  </Navigator>
);

export const AppNavigator = () => (
  <NavigationContainer>
    <TabNavigator />
  </NavigationContainer>
);
