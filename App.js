import 'react-native-gesture-handler';
import React from 'react';
import { StackNav } from './navigation/navigation';
import { DrawerNav } from './navigation/drawerNav';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <DrawerNav />
    </NavigationContainer>
  );
}
