import { useNavigation, DrawerActions } from '@react-navigation/native';
import React from 'react';
import styled from 'styled-components/native';

const StyledTouchable = styled.TouchableOpacity`
  border-radius: 25px;
  margin-right: 3px;
  margin-bottom: 2px;
`;

const StyledImage = styled.Image`
  border-radius: 50px;
  border-width: 3px;
  border-color: green;
  width: 60px;
  height: 60px;
  resize-mode: cover;
`;

export const Avatar = ({}) => {
  const navigation = useNavigation();
  const handlePress = () => {
    console.log();
    navigation.dispatch(DrawerActions.toggleDrawer());
  };
  return (
    <StyledTouchable onPress={handlePress}>
      <StyledImage
        source={{
          uri: 'https://images.unsplash.com/photo-1544765773-a8dce1f272f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80',
        }}
      />
    </StyledTouchable>
  );
};
