import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Perfil, PerfilTabs } from '../screens/perfil';
import { Torneos } from '../screens/torneos';
import { Avatar } from '../components/avatar';
import { Home } from '../screens/home';
import { Rankings } from '../screens/rankings';

const Tabs = createBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Torneos" component={Torneos} />
      <Tabs.Screen name="Rankings" component={Rankings} />
      <Tabs.Screen name="Perfil" component={PerfilTabs} />
    </Tabs.Navigator>
  );
};
