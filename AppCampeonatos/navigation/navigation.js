import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TabNav } from './tabNav';
import { Torneo } from '../screens/torneo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from '../components/avatar';
import { Registrarse } from '../screens/registrarse';
import { DrawerNav } from './drawerNav';
import { useSelector } from 'react-redux';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  const isLoggedIn = useSelector(getLoggedState);
  return (
    <Stack.Navigator
      screenOptions={{
        headerTintColor: '#FFFFF0',
        headerStyle: { backgroundColor: 'orange' },
        headerTitleStyle: { fontSize: 32 },

        headerRight: () => {
          return isLoggedIn ? <Avatar /> : null;
        },
        headerTitleAlign: 'center',
        headerShown: true,
      }}
    >
      <Stack.Screen name="Campeones">{() => <TabNav />}</Stack.Screen>
      <Stack.Screen name="Torneo" component={Torneo} />
      <Stack.Screen name="Registro" component={Registrarse} />
    </Stack.Navigator>
  );
};
