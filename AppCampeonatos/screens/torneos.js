import React, { useEffect, useState } from 'react';
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
import { getInscription } from '../redux/reducers/userInfoReducer';
import { Card } from '../components/myCard';

const DATA = require('../assets/datos.json');

const Stack = createNativeStackNavigator();

export const Torneos = ({ route, navigation }) => {
  const [toRender, setToRender] = useState(Object.entries(DATA.torneos));
  const [idScreen, setIdScreen] = useState('Home');
  const inscriptions = useSelector(getInscription);
  const isLoggedIn = useSelector(getLoggedState);
  const handlePress = () => {
    if (isLoggedIn === true) {
      navigation.navigate('Crear Torneo');
    } else {
      navigation.navigate('Iniciar Sesion');
    }
  };
  useEffect(() => {
    if (route.params) {
      setIdScreen(route.params.idScreen);
    }
    switch (idScreen) {
      case 'Home':
        setToRender(Object.entries(DATA.torneos));
        break;
      case 'Mis Torneos':
        setToRender(Object.entries(inscriptions));
        break;
      default:
        setToRender(Object.entries(DATA.torneos));
        break;
    }
  }, [idScreen, inscriptions]);
  return (
    <>
      <ScrollView>
        <StyledView direction="row">
          {toRender.map(([id, torneo]) => {
            return (
              <Card key={id}>
                <StyledText fontWeight={'bold'}>{torneo.name}</StyledText>
                <StyledText fontWeight={'bold'}>{torneo.organizer}</StyledText>
                <StyledText fontWeight={'bold'}>{torneo.location}</StyledText>
                <StyledText color={'darkgreen'}>
                  Algunos Participantes:
                </StyledText>
                <Card direction="row" border={'0px'}>
                  {Object.entries(DATA.jugadores).map(([id, profile]) => {
                    return (
                      <Card width="27%" border={'0px'} key={id}>
                        <Image
                          source={{
                            uri: 'https://images.unsplash.com/photo-1544765773-a8dce1f272f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80',
                          }}
                          style={{ height: 40, width: 40, borderRadius: 50 }}
                        />
                        <StyledText>{profile.name}</StyledText>
                        <StyledText>Rank #{profile.rank}</StyledText>
                        <StyledText color="red" fontWeight={'bold'}>
                          {profile.state}
                        </StyledText>
                      </Card>
                    );
                  })}
                </Card>
                {isLoggedIn ? (
                  <MyButton
                    text="Ver Torneo"
                    navigation={navigation}
                    toScreen={'Torneo'}
                    toScreenParams={{ idTorneo: id }}
                  />
                ) : (
                  <MyButton
                    text="Registrarse"
                    navigation={navigation}
                    toScreen={'Iniciar Sesion'}
                  />
                )}
              </Card>
            );
          })}
        </StyledView>
      </ScrollView>
      {idScreen === 'Home' ? (
        <Plus>
          <TouchableOpacity onPress={handlePress}>
            <Text
              style={{
                fontSize: 34,
              }}
            >
              ➕
            </Text>
          </TouchableOpacity>
        </Plus>
      ) : null}
    </>
  );
};

const Tabs = createMaterialTopTabNavigator();

export const TorneosTabs = () => {
  return (
    <Tabs.Navigator>
      <Tabs.Screen name="Mis Torneos">
        {(props) => (
          <Torneos
            {...{ ...props, route: { params: { idScreen: 'Mis Torneos' } } }}
          />
        )}
      </Tabs.Screen>
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
      <Stack.Screen
        name="Torneo"
        component={Torneo}
        options={{ headerShown: false }}
      >
        {/* {(props) => (
          <Torneo
            {...{ ...props, route: { params: { idTorneo: '123abc' } } }}
          />
        )} */}
      </Stack.Screen>
    </Stack.Navigator>
  );
};

const StyledView = styled.View`
  justify-content: center;
  flex-flow: ${(props) => props.direction || 'row'} wrap;
  background-color: rgb(20, 170, 20);
`;

const StyledText = styled.Text`
  color: ${(props) => props.color || 'darkorange'};
  font-size: 16px;
  text-align: center;
  font-weight: ${(props) => props.fontWeight || '400'};
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
  z-index: 1;
`;
