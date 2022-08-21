import React, { useState } from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from '../screens/settings';
import { Perfil } from '../screens/perfil';

const Drawer = createDrawerNavigator();

export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        swipeEnabled: false,

        headerTintColor: '#FFFFF0',
        headerStyle: { backgroundColor: 'orange' },
        /* headerRight: () => {
          return isLoggedIn ? <Avatar /> : null;
        }, */
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Atras" component={Perfil}></Drawer.Screen>
      <Drawer.Screen name="Configuracion" component={Settings}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
