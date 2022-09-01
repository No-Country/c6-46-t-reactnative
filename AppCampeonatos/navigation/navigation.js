import React from 'react';
import { TabNav } from './tabNav';
import { Torneo } from '../screens/torneo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Avatar } from '../components/avatar';
import { Registrarse } from '../screens/registrarse';
import { Modalidades } from '../screens/modalidades';
import { useSelector } from 'react-redux';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';
import { Settings } from '../screens/settings';
import { CrearTorneo } from '../screens/crearTorneo';
import { GearIcon } from '../components/gearIcon';

/* Main stack of app, rendered directly by App.js */
const Stack = createNativeStackNavigator();

export const StackNav = () => {
  const isLoggedIn = useSelector(getLoggedState);
  return (
    <Stack.Navigator
      screenOptions={({ navigation, route }) => ({
        headerTintColor: 'white',
        headerStyle: { backgroundColor: 'orange' },
        headerTitleStyle: { fontSize: 44 },

        headerRight: () => {
          switch (route.name) {
            case 'Perfil':
              return <GearIcon navigation={navigation} />;
            default:
              return isLoggedIn ? <Avatar /> : null;
          }
        },
        headerTitleAlign: 'center',
        headerShown: true,
      })}
    >
      {/* Three ways of calling a Stack Screen component. 
          First one let's you pass props or other arguments.
          Then, self closing compoenent.
          Finally, component with corresponging closing tag.*/}
      <Stack.Screen name="Campeones">{() => <TabNav />}</Stack.Screen>
      <Stack.Screen name="Torneo" component={Torneo} />
      <Stack.Screen name="Registro" component={Registrarse} />
      <Stack.Screen name="Configuracion" component={Settings} />
      <Stack.Screen name="Crear Torneo" component={CrearTorneo}></Stack.Screen>
      <Stack.Screen name="Modalidades" component={Modalidades}></Stack.Screen>
    </Stack.Navigator>
  );
};
