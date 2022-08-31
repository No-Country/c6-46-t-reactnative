import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Torneos, TorneosStack } from '../screens/torneos';
import { Rankings } from '../screens/rankings';
import { LogIn } from '../screens/logIn';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';
import { useSelector } from 'react-redux';
import { Perfil } from '../screens/perfil';

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
        tabBarStyle: {
          backgroundColor: 'white',
          height: 76,
        },
        tabBarActiveTintColor: 'darkorange',
        tabBarInactiveTintColor: 'grey',
        tabBarActiveBackgroundColor: 'white',
        tabBarAllowFontScaling: true,
        tabBarLabelStyle: {
          fontSize: 17,
          fontWeight: '700',
        },
      }}
    >
      {toRender()}
    </Tabs.Navigator>
  );
};
