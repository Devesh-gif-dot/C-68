import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs';
import Bookscreen from './screens/Bookscreen.js'
import Searchscreen from './screens/Searchscreen.js';

export default function App() {
  return (
    <AppContainer />
  );
}

const TabNavigator = createBottomTabNavigator({
 transaction:{screen:Bookscreen},
 search:{screen:Searchscreen}
})
const AppContainer = createAppContainer(TabNavigator);
