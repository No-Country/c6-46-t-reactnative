import React from 'react';
import {
  TextInput,
  Text,
  View,
  Image,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { MyButton } from '../components/myButton';
import { MyInput } from '../components/myInput';
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';
import { setEmail, setPassword } from '../redux/reducers/userInfoReducer';

export const LogIn = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              marginTop: 20,
            }}
          >
            <Text
              style={{
                fontSize: 40,
                color: 'orange',
                fontWeight: '700',
              }}
            >
              Iniciar Sesion
            </Text>
          </View>
          <View style={{ flex: 2 }}>
            <MyInput
              label={'E-mail'}
              action={(data) => dispatch(setEmail(data))}
            />
            <MyInput
              label={'Contraseña'}
              action={(data) => dispatch(setPassword(data))}
            />
            <Text
              style={{
                marginVertical: 5,
                marginHorizontal: 10,
                textAlign: 'right',
              }}
            >
              Olvidaste tu constraseña?
            </Text>
          </View>
          <View
            style={{
              flex: 3,
              justifyContent: 'center',
              width: '80%',
              marginHorizontal: 'auto',
              alignSelf: 'center',
            }}
          >
            <MyButton
              text={'Iniciar Sesion'}
              dispatch={() => dispatch(setLoggedState())}
            />
            <MyButton
              text={'Registrarse'}
              toScreen={'Registro'}
              navigation={navigation}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};
