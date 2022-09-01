import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Settings } from '../screens/settings';
import { Perfil } from '../screens/perfil';

const Drawer = createDrawerNavigator();
/* Drawer Navigation, currently not used =( */
export const DrawerNav = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        drawerPosition: 'right',
        swipeEnabled: false,
        headerTintColor: '#FFFFF0',
        headerStyle: { backgroundColor: 'orange' },
        headerTitleAlign: 'center',
        headerShown: false,
      }}
    >
      <Drawer.Screen name="Atras" component={Perfil}></Drawer.Screen>
      <Drawer.Screen name="Configuracion" component={Settings}></Drawer.Screen>
    </Drawer.Navigator>
  );
};
