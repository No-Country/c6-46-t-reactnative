import React from 'react';
import { View } from 'react-native';
import { MyButton } from '../components/myButton';
import { Perfil } from './perfil';
import { Torneos } from './torneos';

export const Settings = ({ navigation }) => {
  return (
    <View>
      <MyButton text="Cancelar" toScreen={Torneos} navigation={navigation} />

      <MyButton text="Confirmar" toScreen={Perfil} navigation={navigation} />
    </View>
  );
};
