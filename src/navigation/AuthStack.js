import 'react-native-gesture-handler';
import React from 'react';
import {View, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import screens from '../utils/screens';

const Stack = createNativeStackNavigator();

const AuthStack = props => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Start"
          component={screens.Start}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="AddWorkout"
          component={screens.AddWorkout}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Payment"
          component={screens.Payment}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Login"
          component={screens.Login}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Signup"
          component={screens.Signup}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="HomeTab"
          component={screens.Drawer}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Membership"
          component={screens.Membership}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Details"
          component={screens.Details}
          options={{headerShown: false}}
        />
        <Stack.Screen
          name="Edit"
          component={screens.Edit}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AuthStack;
