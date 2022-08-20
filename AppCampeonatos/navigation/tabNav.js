import React, { useState } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Perfil, PerfilTabs } from '../screens/perfil';
import { Torneos, TorneosStack } from '../screens/torneos';
import { Torneo } from '../screens/torneo';
import { Rankings } from '../screens/rankings';
import { LogIn } from '../screens/logIn';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';
import { useSelector } from 'react-redux';

const Tabs = createBottomTabNavigator();

export const TabNav = () => {
  const isLoggedIn = useSelector(getLoggedState);
  const toRender = () => {
    if (isLoggedIn) {
      return (
        <>
          <Tabs.Screen name="Home" component={Torneos} />
          <Tabs.Screen name="Torneos" component={TorneosStack} />
          <Tabs.Screen name="Ranking" component={Rankings} />
          <Tabs.Screen name="Perfil" component={Perfil} />
        </>
      );
    } else {
      return (
        <>
          <Tabs.Screen name="Torneos" component={Torneos} />
          <Tabs.Screen name="Ranking" component={Rankings} />
          <Tabs.Screen name="Iniciar Sesion" component={LogIn} />
        </>
      );
    }
  };
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
          fontWeight: '500',
        },
      }}
    >
      {toRender()}
    </Tabs.Navigator>
  );
};
