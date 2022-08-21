import React from 'react';
import { View } from 'react-native';
import { MyButton } from '../components/myButton';
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';

export const Settings = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View style={{ marginTop: 40 }}>
      <MyButton
        text="Editar Perfil"
        /* toScreen={"Editar Perfil"} */
        dispatch={() => navigation.goBack()}
        navigation={navigation}
      />

      <MyButton
        text="Cerrar Sesion"
        dispatch={() => dispatch(setLoggedState())}
        toScreen={'Campeones'}
        navigation={navigation}
      />
    </View>
  );
};
