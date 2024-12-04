import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import HomeScreen from '../screens/HomeScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';
import WelcomeScreen from '../screens/WelcomeScreen';
import RouteName from '../routes/RouteName';

const Stack = createNativeStackNavigator();
export default function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={RouteName.WELOCME_SCREEN} screenOptions={{headerShown:false,}} >
        <Stack.Screen name={RouteName.HOME_SCREEN} component={HomeScreen} />
        <Stack.Screen name={RouteName.LOGIN_SCREEN} component={LoginScreen} />
        <Stack.Screen name={RouteName.SIGNUP_SCREEN} component={SignupScreen} />
        <Stack.Screen name={RouteName.WELOCME_SCREEN} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
