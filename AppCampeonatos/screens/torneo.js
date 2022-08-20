import React from 'react';
import styled from 'styled-components/native';

const Body = styled.View`
  height: 100%;
  background: rgb(24, 24, 24);
`;

const Texto = styled.Text`
  color: red;
`;

export const Torneo = ({ route }) => {
  if (!route.params) {
    var route = { params: { idTorneo: 'TORNEO' } };
  }
  const { idTorneo } = route.params;

  return (
    <Body>
      <Texto>"ESTO ES UN TEXTO"</Texto>
      <Texto>{idTorneo}</Texto>
    </Body>
  );
};
