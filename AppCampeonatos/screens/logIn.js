import React, { useState } from 'react';
import {
  Text,
  View,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
  Alert,
} from 'react-native';
import { MyButton } from '../components/myButton';
import { MyInput } from '../components/myInput';
import { useDispatch, useSelector } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';
import {
  getEmail,
  getPassword,
  setEmail,
  setPassword,
} from '../redux/reducers/userInfoReducer';
import AsyncStorage from '@react-native-async-storage/async-storage';

const DATA = require('../assets/datos.json');

export const LogIn = ({ navigation }) => {
  const dispatch = useDispatch();
  const user = useSelector(getEmail);
  const pass = useSelector(getPassword);
  const [valid, setValid] = useState([false, false]);

  const handleLogIn = async () => {
    const storage = await getStorageCredentials();
    if (DATA.users.hasOwnProperty(user) || storage.hasOwnProperty(user)) {
      if (pass === DATA.users[user] || pass === storage[user]) {
        dispatch(setLoggedState());
      } else {
        Alert.alert('Credenciales Incorrectas 💥');
      }
    } else {
      Alert.alert('Credenciales Incorrectas 💥');
    }
  };

  const getStorageCredentials = async () => {
    try {
      const jsonValue = await AsyncStorage.getItem('@users');
      return jsonValue !== null
        ? JSON.parse(jsonValue)
        : JSON.parse(JSON.stringify({ user: 'pass' }));
    } catch (e) {
      console.log(e);
    }
  };

  const setStorageCredentials = async (field, value) => {
    try {
      const storage = await getStorageCredentials();
      const newValue = { ...storage, ...{ [field]: value } };
      const jsonValue = JSON.stringify(newValue);
      await AsyncStorage.setItem('@users', jsonValue);
    } catch (e) {
      console.log(e);
    }
  };

  const handleSignIn = async () => {
    const storage = await getStorageCredentials();
    if (user !== '' && valid[0]) {
      if (DATA.users.hasOwnProperty(user) || storage.hasOwnProperty(user)) {
        Alert.alert('Credenciales Incorrectas 💥', 'Ya existe este usuario');
      } else if (pass !== '' && valid[1]) {
        setStorageCredentials(user, pass);
        dispatch(setLoggedState());
        Alert.alert('Nuevo Usuario 🎉', 'Registro Exitoso. Bienvenido.');
      } else {
        Alert.alert(
          'Nuevo Usuario 💥',
          'Registro Fallido. Ingrese Contraseña valida. \n\nMinimo 8 caracteres. (Mayusculas, minusculas, numeros y caracteres especiales)'
        );
      }
    } else {
      Alert.alert(
        'Nuevo Usuario 💥',
        'Registro Fallido. Ingrese E-mail valido.'
      );
    }
  };

  const validate = (type, text) => {
    let passReg = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    let userReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    switch (type) {
      case 'pass':
        return passReg.test(text);
      case 'user':
        return userReg.test(text);
      default:
        break;
    }
  };

  const handleEmailInput = (data) => {
    if (validate('user', data)) {
      dispatch(setEmail(data));
      setValid([true, valid[1]]);
    } else {
      setValid([false, valid[1]]);
    }
  };

  const handlePassInput = (data) => {
    if (validate('pass', data)) {
      if (data.length < 8) {
        setValid([valid[0], false]);
      } else {
        dispatch(setPassword(data));
        setValid([valid[0], true]);
      }
    } else {
      setValid([valid[0], false]);
    }
  };

  return (
    <KeyboardAvoidingView
      keyboardVerticalOffset={-80}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1, backgroundColor: 'white' }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 46,
                color: 'darkorange',
                fontWeight: '500',
              }}
            >
              Iniciar Sesion
            </Text>
          </View>
          <View style={{ flex: 2, paddingHorizontal: 10 }}>
            <MyInput
              label={'E-mail'}
              action={(data) => handleEmailInput(data)}
            />
            <MyInput
              label={'Contraseña'}
              type={true}
              action={(data) => handlePassInput(data)}
            />
            <Text
              style={{
                marginVertical: 10,
                marginRight: 15,
                textAlign: 'right',
                fontSize: 18,
                fontWeight: '500',
                color: 'darkorange',
                textDecorationLine: 'underline',
              }}
              onPress={() =>
                Alert.alert(
                  'Olvidaste tu constraseña !!!',
                  '\nComo es posible? Dale, hace memoria! \n\n\n💡Pista: es la misma que la ultima vez.'
                )
              }
            >
              Olvidaste tu constraseña?
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'flex-end',
              width: '80%',
              marginBottom: 20,
              alignSelf: 'center',
            }}
          >
            <MyButton text={'Iniciar Sesion'} dispatch={handleLogIn} />
            <Text
              style={{
                marginBottom: 10,
                marginTop: 10,
                marginHorizontal: 10,
                fontSize: 18,
                fontWeight: '500',
              }}
            >
              No tenes cuenta? Crea una:
            </Text>
            <MyButton text={'Registrarme'} dispatch={handleSignIn} />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
