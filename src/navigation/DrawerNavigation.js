import {createDrawerNavigator} from '@react-navigation/drawer';
import React from 'react';
import {View, Text} from 'react-native';
import screens from '../utils/screens';
import CustomDrawer from './CustomDrawer';
import TabBar from './TabBar';

const Drawer = createDrawerNavigator();
const DrawerNavigation = props => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerShown: false,
        drawerStyle: {width: '70%'},
      }}
      drawerContent={props => <CustomDrawer {...props} />}>
      <Drawer.Screen name="HomeScreen" component={TabBar} />
      <Drawer.Screen name="Membership" component={screens.Membership} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigation;
