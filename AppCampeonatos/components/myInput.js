import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../redux/reducers/userInfoReducer';

export const MyInput = ({ label }) => {
  const dispatch = useDispatch();
  const handleChange = (newInput) => {
    switch (label) {
      case 'E-mail':
        dispatch(setEmail(newInput));
        break;
      case 'Contraseña':
        dispatch(setPassword(newInput));
        break;
      default:
        break;
    }
  };
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
        marginHorizontal: 10,
        marginVertical: 5,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ flex: 1 }}>{label}:</Text>
      <TextInput
        onChangeText={handleChange}
        style={{
          flex: 3,
          borderRadius: 5,
          borderWidth: 1,
          marginLeft: 2,
          paddingVertical: 5,
          paddingHorizontal: 5,
          fontWeight: '500',
        }}
      />
    </View>
  );
};
