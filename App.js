import 'react-native-gesture-handler';
import React from 'react';
import { StackNav } from './navigation/navigation';
import { DrawerNav } from './navigation/drawerNav';
import { NavigationContainer } from '@react-navigation/native';
import { Provider } from 'react-redux';
import store from './redux/store';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <StackNav />
      </NavigationContainer>
    </Provider>
  );
}
