import React from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MyButton } from '../components/myButton';
import { Torneo } from './torneo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useSelector } from 'react-redux';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Eliminatorias } from './eliminatorias';
import { Participantes } from './participantes';

const Stack = createNativeStackNavigator();

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
  const isLoggedIn = useSelector(getLoggedState);
  const handlePress = () => {
    if (isLoggedIn) {
      navigation.navigate('Crear Torneo');
    } else {
      navigation.navigate('Iniciar Sesion');
    }
  };
  return (
    <>
      <ScrollView>
        <StyledView direction="row">
          {torneos.map((torneo, index) => {
            return (
              <Card key={index}>
                <StyledText>{torneo.title}</StyledText>
                <StyledText>{torneo.organizer}</StyledText>
                <StyledText>{torneo.where}</StyledText>
                <StyledText color="pink">Participantes:</StyledText>
                <Card direction="row">
                  {profiles.map((profile, index) => {
                    return (
                      <Card width="20%" key={index}>
                        <Image
                          source={{
                            uri: 'https://images.unsplash.com/photo-1544765773-a8dce1f272f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80',
                          }}
                          style={{ height: 40, width: 40, borderRadius: 50 }}
                        />
                        <StyledText>{profile.firstName}</StyledText>
                        <StyledText>{profile.lastName}</StyledText>
                        <StyledText color="red">{profile.teams[0]}</StyledText>
                      </Card>
                    );
                  })}
                </Card>
                {isLoggedIn ? (
                  <MyButton
                    text="Inscribirse"
                    navigation={navigation}
                    toScreen={'Torneo'}
                    toScreenParams={{ idTorneo: '123abc' }}
                  />
                ) : (
                  <MyButton
                    text="Registrarse"
                    navigation={navigation}
                    toScreen={'Iniciar Sesion'}
                    toScreenParams={{ idTorneo: '123abc' }}
                  />
                )}
              </Card>
            );
          })}
        </StyledView>
      </ScrollView>
      <TouchableOpacity onPress={handlePress}>
        <Plus>
          <Text
            style={{
              fontSize: 34,
            }}
          >
            ➕
          </Text>
        </Plus>
      </TouchableOpacity>
    </>
  );
};

const Tabs = createMaterialTopTabNavigator();

export const TorneosTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Mis Torneos" component={Torneos}></Tabs.Screen>
      <Tabs.Screen name="Participantes" component={Participantes}></Tabs.Screen>
      <Tabs.Screen name="Eliminatorias" component={Eliminatorias}></Tabs.Screen>
    </Tabs.Navigator>
  );
};

export const TorneosStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen
        options={{ headerShown: false }}
        name="MisTorneos"
        component={TorneosTabs}
      />
      <Stack.Screen name="Torneo" options={{ headerShown: false }}>
        {(props) => (
          <Torneo
            {...{ ...props, route: { params: { idTorneo: '123abc' } } }}
          />
        )}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const StyledView = styled.View`
  justify-content: space-evenly;
  flex-flow: ${(props) => props.direction || 'row'} wrap;
  background-color: white;
`;

const StyledText = styled.Text`
  color: ${(props) => props.color || 'orange'};
  text-align: center;
`;

const Card = styled.View`
  width: ${(props) => props.width || '90%'};
  background-color: green;
  border-radius: 5px;
  margin: 5px 5px;
  flex-flow: ${(props) => props.direction || 'column'} wrap;
  justify-content: space-evenly;
  align-items: center;
  color: white;
`;

const Plus = styled.View`
  width: 80px;
  height: 80px;
  flex-direction: row;
  position: absolute;
  background-color: orange;
  bottom: 0;
  right: 0;
  border-radius: 50px;
  justify-content: center;
  align-items: center;
  margin: 5px;
  border: 2px darkgrey;
`;
