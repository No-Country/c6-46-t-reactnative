import React from 'react';
import styled from 'styled-components/native';

const Body = styled.View`
  height: 100%;
  background: rgb(24, 24, 24);
`;

const Texto = styled.Text`
  color: red;
`;

export const Torneo = ({ navigation, route }) => {
  const { idTorneos } = route.params;
  return (
    <Body>
      <Texto>{}</Texto>
      <Texto>{}</Texto>
    </Body>
  );
};
