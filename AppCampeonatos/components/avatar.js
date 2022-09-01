import React from 'react';
import styled from 'styled-components/native';

export const Avatar = ({}) => {
  const handlePress = () => {};

  return (
    <StyledTouchable onPress={handlePress}>
      <StyledImage
        source={{
          uri: 'https://images.unsplash.com/photo-1605395630162-1c7cc7a34590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
        }}
      />
    </StyledTouchable>
  );
};

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
  resize-mode: contain;
`;
