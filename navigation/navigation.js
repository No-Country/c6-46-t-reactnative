import React, { useState } from 'react';
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { TabNav } from './tabNav';
import { Torneo } from '../screens/torneo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from '../components/avatar';
import { DrawerNav } from './drawerNav';

const Stack = createNativeStackNavigator();

export const StackNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(true);

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
      <Stack.Screen name="Campeones" component={TabNav} />
      <Stack.Screen name="Torneo" component={Torneo} />
      {/* <Stack.Screen name="Drawer" component={DrawerNav} /> */}
    </Stack.Navigator>
  );
};
