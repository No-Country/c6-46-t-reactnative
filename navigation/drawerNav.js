import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { TabNav } from './tabNav';
import { Settings } from '../screens/settings';
import { Avatar } from '../components/avatar';
import { StackNav } from './navigation';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerTintColor: '#FFFFF0',
        headerStyle: { backgroundColor: 'orange' },
        headerRight: () => {
          return isLoggedIn ? <Avatar /> : null;
        },
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Home" component={StackNav}></Drawer.Screen>
      <Drawer.Screen name="Settings" component={Settings}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
