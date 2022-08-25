import React from 'react';
import { TouchableOpacity, Text, View } from 'react-native';

export const MyButton = ({
  text,
  dispatch,
  navigation,
  toScreen,
  toScreenParams,
}) => {
  const handlePress = () => {
    if (toScreen) {
      if (toScreenParams) {
        navigation.navigate(toScreen, toScreenParams);
      } else {
        navigation.navigate(toScreen);
      }
    }
    if (dispatch) {
      dispatch();
    }
  };
  return (
    <TouchableOpacity
      style={{
        paddingHorizontal: 15,
        paddingVertical: 7,
        backgroundColor: 'orange',
        flexDirection: 'row',
        borderRadius: 5,
        margin: 5,
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: 16,
          color: 'black',
          fontWeight: '400',
        }}
      >
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};
