import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import navigationPaths from '../constants/navigationPaths';
import InfoListScreen from '../screens/InfoListScreen';
import FormScreen from '../screens/FormScreen';
import { RootParamList } from '../types/navigationTypes';
import AnimationScreens from '../screens/AnimationScreens';
import NotificationScreen from '../screens/NotificationScreen';
import Lister from '../screens/Lister';
import TextAnimation from '../screens/TextAnimation';
import HorizontalParalax from '../screens/HorizontalParalax';
import HearBeat from '../screens/HearBeat';
import LoadingAnimation from '../screens/LoadingAnimation';
import SwitchButtonAnimation from '../screens/SwitchButtonAnimation';
import BoxRatation from '../screens/BoxRatation';
import DoubleTap from '../screens/DoubleTap';

const ScreenNavigation = () => {
    const Stack = createNativeStackNavigator<RootParamList>();
    console.log("cxc")
  return (
    <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name={navigationPaths.DOUBLE_TAP_ANIMATION_SCREEN} component={DoubleTap}/>
          <Stack.Screen name={navigationPaths.BOX_ANIMATION_SCREEN} component={BoxRatation}  />
        <Stack.Screen name={navigationPaths.SWITCH_ANIMATION_SCREEN} component={SwitchButtonAnimation} />
          <Stack.Screen  name={navigationPaths.LOADING_ANIMATION_SCREEN} component={LoadingAnimation} />
          <Stack.Screen name={navigationPaths.HEAR_BEAT_SCREEN}  component={HearBeat}/>
          <Stack.Screen name={navigationPaths.HORIZONTAL_PARALX_SCREEN} component={HorizontalParalax} />
          <Stack.Screen name={navigationPaths.TEXT_SCREEN} component={TextAnimation} />
        <Stack.Screen name={navigationPaths.LISTER_SCREEN} component={Lister} />
        <Stack.Screen name={navigationPaths.NOTIFICATION_SCREEN} component={NotificationScreen} />
        <Stack.Screen name={navigationPaths.ANIMATION_SCREEN} component={AnimationScreens} />
        <Stack.Screen name={navigationPaths.INFO_LIST} component={InfoListScreen} />
        <Stack.Screen name={navigationPaths.FORM_FILL} component={FormScreen} />
        
        </Stack.Navigator>
    </NavigationContainer>
  )
}

export default ScreenNavigation

const styles = StyleSheet.create({})