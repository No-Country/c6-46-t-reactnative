import React, { useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import { useDispatch } from 'react-redux';
import { setEmail, setPassword } from '../redux/reducers/userInfoReducer';

export const MyInput = ({ label, action }) => {
  const dispatch = useDispatch();
  const handleChange = (newInput) => {
    if (action) {
      action(newInput);
    }
  };
  return (
    <View style={{ marginTop: 10, marginLeft: 10 }}>
      <Text>{label}:</Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 5,
        }}
      >
        <TextInput
          onChangeText={handleChange}
          style={{
            width: '90%',
            borderRadius: 5,
            borderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 5,
            fontWeight: '500',
          }}
        />
      </View>
    </View>
  );
};
