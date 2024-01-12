import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import WelcomeScreen from '../screens/authScreens/WelcomeScreen';
import SignUp from '../screens/authScreens/SignUp';
import Home from '../screens/appScreens/Home';
import {useGlobalAuthState} from '../store/authStore';

const Stack = createNativeStackNavigator();

const authStack = () => (
  <Stack.Navigator initialRouteName="Welcome">
    <Stack.Screen
      name="Welcome"
      component={WelcomeScreen}
      options={{
        headerShown: false,
      }}
    />

    <Stack.Screen
      name="SignUp"
      component={SignUp}
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
  const authStates = useGlobalAuthState();
  const {isLoggedIn} = authStates;
  return (
    <NavigationContainer>
      {isLoggedIn ? appStack() : authStack()}
    </NavigationContainer>
  );
};

export default AppNavigator;
