import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/WelcomeScreen';
import Home from '../screens/Home';

const Stack = createNativeStackNavigator();

const isLoggedIn = false;

const authStack = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />
    {/* Add other authentication screens if needed */}
  </Stack.Navigator>
);

const appStack = () => (
  <Stack.Navigator initialRouteName="Home">
    <Stack.Screen
      name="Home"
      component={Home}
      options={{
        headerShown: false,
      }}
    />
    {/* Add other app screens as needed */}
  </Stack.Navigator>
);

const AppNavigator = () => {
  return (
    <NavigationContainer>
      {isLoggedIn ? appStack() : authStack()}
    </NavigationContainer>
  );
};

export default AppNavigator;
