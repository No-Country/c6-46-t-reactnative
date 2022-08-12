import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const MyButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity
      style={{
        maxWidth: '30%',
        padding: 10,
        backgroundColor: 'grey',
        flexDirection: 'row',
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={onPress}
    >
      <Text>{text}</Text>
    </TouchableOpacity>
  );
};
