import React from 'react';
import { View, Text } from 'react-native';
import { MyButton } from '../components/myButton';
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';
import { setEmail, setPassword } from '../redux/reducers/userInfoReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const Settings = ({ navigation }) => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(setLoggedState());
    dispatch(setEmail(''));
    dispatch(setPassword(''));
  };

  const handleErase = async () => {
    try {
      await AsyncStorage.removeItem('@users');
      await AsyncStorage.removeItem('@events');
    } catch (e) {
      console.log(e);
    }
    handleLogOut();
  };

  return (
    <View style={{ marginTop: 40 }}>
      <Text
        style={{
          fontWeight: '900',
          color: 'darkorange',
          fontSize: 90,
          textAlign: 'center',
          marginBottom: 15,
        }}
      >
        ⚙
      </Text>
      <MyButton
        text="Editar Perfil"
        /* toScreen={"Editar Perfil"} */
        dispatch={() => navigation.goBack()}
        navigation={navigation}
      />
      <MyButton
        text="Cerrar Sesion"
        dispatch={handleLogOut}
        toScreen={'Campeones'}
        navigation={navigation}
      />
      <MyButton
        text="Eliminar Usuario"
        dispatch={handleErase}
        toScreen={'Campeones'}
        navigation={navigation}
      ></MyButton>
    </View>
  );
};
