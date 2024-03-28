/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { useEffect } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  useColorScheme,

} from 'react-native';
import ScreenNavigation from './src/navigation/ScreenNavigation';
import { CreateTable } from './src/constants/databaseSetup';
import {GestureHandlerRootView} from "react-native-gesture-handler"





function App(): JSX.Element {

  CreateTable()


  return (
      <GestureHandlerRootView style={{flex:1}}>
      <ScreenNavigation />
      </GestureHandlerRootView>

  );
}



export default App;
