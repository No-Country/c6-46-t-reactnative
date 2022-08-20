import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { useSelector } from 'react-redux';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';

export const MyButton = ({
  text,
  dispatch,
  navigation,
  toScreen,
  toScreenParams,
}) => {
  /* const loggedState = useSelector(getLoggedState); */
  const handlePress = () => {
    if (dispatch === undefined) {
      navigation.navigate(toScreen, toScreenParams);
    } else {
      dispatch();
    }
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
        borderWidth: 1,
        borderColor: 'black',
        justifyContent: 'center',
      }}
      onPress={handlePress}
    >
      <Text
        style={{
          fontSize: 12,
          color: 'black',
          fontWeight: '400',
        }}
      >
        {text.toUpperCase()}
      </Text>
    </TouchableOpacity>
  );
};
