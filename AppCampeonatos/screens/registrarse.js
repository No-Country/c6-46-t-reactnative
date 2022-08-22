import React from 'react';
import { Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import { getEmail, getPassword } from '../redux/reducers/userInfoReducer';

export const Registrarse = () => {
  const email = useSelector(getEmail);
  const password = useSelector(getPassword);
  return (
    <View>
      <Text>{email}</Text>
      <Text>{password}</Text>
    </View>
  );
};
