import React from 'react';
import { View, Text, TextInput } from 'react-native';

export const MyInput = ({ label }) => {
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
