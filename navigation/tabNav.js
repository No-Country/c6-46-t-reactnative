import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Perfil, PerfilTabs } from '../screens/perfil';
import { Torneos } from '../screens/torneos';
import { Torneo } from '../screens/torneo';
import { Rankings } from '../screens/rankings';

const Tabs = createBottomTabNavigator();

export const TabNav = () => {
  return (
    <Tabs.Navigator
      screenOptions={{
        headerShown: false,
        activeTintColor: 'black',
        tabBarStyle: {
          backgroundColor: 'white',
          height: 72,
        },
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: 'black',
        tabBarActiveBackgroundColor: 'orange',
        tabBarAllowFontScaling: true,
        tabBarLabelStyle: {
          fontSize: 16,
          fontWeight: '400',
        },
      }}
    >
      <Tabs.Screen name="Torneos" component={Torneos} />
      <Tabs.Screen name="Torneo" component={Torneo} />

      <Tabs.Screen name="Rankings" component={Rankings} />
      <Tabs.Screen name="Perfil" component={PerfilTabs} />
    </Tabs.Navigator>
  );
};
