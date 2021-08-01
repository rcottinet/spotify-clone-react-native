import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import AlbumScreen from '../screens/AlbumScreen.component';
import {HomeScreen} from '../screens/HomeScreen.component';

const {Navigator, Screen} = createStackNavigator();

export function HomeStack() {
  return (
    <Navigator headerMode="none">
      <Screen name="HomeScreen" component={HomeScreen} />
      <Screen name="AlbumScreen" component={AlbumScreen} />
    </Navigator>
  );
}