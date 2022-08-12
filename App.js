import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Perfil } from './screens/perfil';
import { Torneos } from './screens/torneos';
import { Torneo } from './screens/torneo';

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Perfil"
          component={Perfil}
          options={{ headerTitleAlign: 'center' }}
        />
        <Stack.Screen name="Torneos" component={Torneos} />
        <Stack.Screen name="Torneo" component={Torneo} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
const Stack = createNativeStackNavigator();
