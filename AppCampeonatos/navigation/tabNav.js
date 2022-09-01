import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Torneos, TorneosStack } from '../screens/torneos';
import { Rankings } from '../screens/rankings';
import { LogIn } from '../screens/logIn';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';
import { useSelector } from 'react-redux';
import { Perfil } from '../screens/perfil';
import Ionicons from '@expo/vector-icons/Ionicons';

/* Main tab, rendered by main Stack in navigation.js */
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
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          switch (route.name) {
            case 'Home':
              return (
                <Ionicons
                  name={'home-outline'}
                  size={42}
                  color={focused ? 'darkorange' : 'grey'}
                />
              );
            case 'Ranking':
              return (
                <Ionicons
                  name={'stats-chart-outline'}
                  size={42}
                  color={focused ? 'darkorange' : 'grey'}
                />
              );
            case 'Torneos':
              return (
                <Ionicons
                  name={'tennisball-outline'}
                  size={42}
                  color={focused ? 'darkorange' : 'grey'}
                />
              );
            default:
              return (
                <Ionicons
                  name={'person-outline'}
                  size={42}
                  color={focused ? 'darkorange' : 'grey'}
                />
              );
          }
        },
        tabBarHideOnKeyboard: true,
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
      })}
    >
      {toRender()}
    </Tabs.Navigator>
  );
};
