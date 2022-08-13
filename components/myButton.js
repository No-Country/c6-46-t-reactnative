import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

export const MyButton = ({ text, navigation, toScreen, ToScreenParams }) => {
  const handlePress = () => {
    navigation.navigate(toScreen, { ToScreenParams });
  };
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 15,
        paddingVertical: 10,
        backgroundColor: 'orange',
        flexDirection: 'row',
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        justifyContent: 'center',
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: 12,
          color: '#FFFFF0',
          fontWeight: '400',
        }}
      >
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};
