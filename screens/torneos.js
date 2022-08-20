import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import { MyButton } from '../components/myButton';

const StyledView = styled.View`
  background-color: blue;
  flex-flow: ${(props) => props.direction || 'column'} wrap;
  justify-content: space-evenly;
  height: 100%;
`;

const StyledText = styled.Text`
  color: ${(props) => props.color || 'orange'};
  text-align: center;
`;

const Card = styled.View`
  max-width: ${(props) => props.width || '90%'}
  background-color: green;
  border-radius: 5px;
  margin: 5px 5px;
  flex-flow: ${(props) => props.direction || 'column'} wrap;
  justify-content: space-evenly;
  align-items: center;
`;

const Plus = styled.View`
  width: 50px;
  height: 50px;
  font-size: 40px;
  position: absolute;
  background-color: white;
  color: black;
  bottom: 0;
  right: 0;
  border-radius: 25px;
  align-items: center;
  justify-content: center;
`;

const torneos = [
  {
    title: 'Open tennis',
    organizer: 'Club de Deportes',
    where: 'Campo de Deportes',
  },
  {
    title: 'Open tennis 2',
    organizer: 'Country Club',
    where: 'Estadio Obras',
  },
  {
    title: 'Open grand prix',
    organizer: 'Club de Deportes 2',
    where: 'River plei',
  },
  {
    title: 'Open grand prix',
    organizer: 'Club de Deportes 2',
    where: 'River plei',
  },
];

const profiles = [
  {
    firstName: 'jose',
    lastName: 'lopez',
    teams: ['mandiyu'],
  },
  {
    firstName: 'juan',
    lastName: 'perez',
    teams: ['mandiyu'],
  },
  {
    firstName: 'jorge',
    lastName: 'alvarez',
    teams: ['mandiyu'],
  },
];

export const Torneos = ({ navigation }) => {
  const handlePress = () => {
    navigation.navigate('Torneo', {
      idTorneo: torneos,
    });
  };
  return (
    <StyledView direction="row">
      {torneos.map((torneo, index) => {
        return (
          <Card key={index}>
            <StyledText>{torneo.title}</StyledText>
            <StyledText>{torneo.organizer}</StyledText>
            <StyledText>{torneo.where}</StyledText>
            <StyledText color="pink">Participantes:</StyledText>
            <Card direction="row" width="100%">
              {profiles.map((profile, index) => {
                return (
                  <Card width="30%" key={index}>
                    <StyledText>{profile.firstName}</StyledText>
                    <StyledText>{profile.lastName}</StyledText>
                    <StyledText color="red">{profile.teams[0]}</StyledText>
                  </Card>
                );
              })}
            </Card>
            <MyButton text="Ver Torneo" onPress={handlePress} />
          </Card>
        );
      })}
      <Plus>
        <Text style={{ fontSize: 40 }}>+</Text>
      </Plus>
    </StyledView>
  );
};
