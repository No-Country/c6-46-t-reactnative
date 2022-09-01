import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Text, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MyButton } from '../components/myButton';
import { Torneo } from './torneo';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useDispatch, useSelector } from 'react-redux';
import { getLoggedState } from '../redux/reducers/isLoggedReducer';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Eliminatorias } from './eliminatorias';
import { Participantes } from './participantes';
import { getInscriptions } from '../redux/reducers/userInfoReducer';
import { Card } from '../components/myCard';
import { setNewForm } from '../redux/reducers/eventInfoReducer';
import { setInscriptionsDiscard } from '../redux/reducers/userInfoReducer';

const DATA = require('../assets/datos.json');

const Stack = createNativeStackNavigator();

export const Torneos = ({ route, navigation }) => {
  const [toRender, setToRender] = useState(Object.entries(DATA.torneos));
  const [idScreen, setIdScreen] = useState('Home');
  const dispatch = useDispatch();
  const inscriptions = useSelector(getInscriptions);
  const isLoggedIn = useSelector(getLoggedState);

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

  const handlePress = () => {
    if (isLoggedIn) {
      dispatch(setNewForm(true));
      navigation.navigate('Crear Torneo');
    } else {
      navigation.navigate('Iniciar Sesion');
    }
  };

  const handleDiscard = (id) => {
    dispatch(setInscriptionsDiscard(id));
  };

  return (
    <>
      <ScrollView>
        <StyledView direction="row">
          {toRender.map(([id, torneo]) => {
            return (
              <Card key={id}>
                {idScreen === 'Mis Torneos' ? (
                  <Text
                    style={{
                      fontWeight: '900',
                      fontSize: 20,
                      borderWidth: 2,
                      borderRadius: 50,
                      borderColor: 'darkgrey',
                      width: '6%',
                      flex: 1,
                      color: 'white',
                      backgroundColor: 'darkorange',
                      position: 'absolute',
                      top: 0,
                      right: 0,
                      textAlign: 'center',
                      textAlignVertical: 'center',
                      marginTop: '2%',
                      marginRight: '2%',
                      zIndex: 1,
                    }}
                    onPress={() => handleDiscard(id)}
                  >
                    X
                  </Text>
                ) : null}
                <StyledText fontWeight={'bold'}>{torneo.name}</StyledText>
                <StyledText fontWeight={'bold'}>{torneo.organizer}</StyledText>
                <StyledText fontWeight={'bold'}>{torneo.location}</StyledText>
                <StyledText color={'darkgreen'}>
                  Algunos Participantes:
                </StyledText>
                <Card justifyContent={'center'} direction="row" border={'0px'}>
                  {Object.entries(DATA.jugadores).map(([index, profile]) => {
                    return (
                      <Card width="35%" border={'0px'} key={index}>
                        <Image
                          source={{
                            uri: 'https://images.unsplash.com/photo-1605395630162-1c7cc7a34590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
                          }}
                          style={{
                            height: 70,
                            width: 70,
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: 'black',
                          }}
                        />
                        <StyledText color="darkgreen">
                          {profile.name}
                        </StyledText>
                        <StyledText fontWeight={'500'}>
                          Rank #{profile.rank}
                        </StyledText>
                        <StyledText color="red" fontWeight={'600'}>
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
                fontSize: 54,
                textAlignVertical: 'center',
                color: 'white',
              }}
            >
              +
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
    <Tabs.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'darkorange',
        tabBarInactiveTintColor: 'darkgrey',
        tabBarLabelStyle: {
          fontSize: 14,
          fontWeight: '700',
        },
      }}
    >
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
      ></Stack.Screen>
    </Stack.Navigator>
  );
};

const StyledView = styled.View`
  justify-content: center;
  flex-flow: ${(props) => props.direction || 'row'} wrap;
  background-color: rgb(100, 180, 100);
`;

const StyledText = styled.Text`
  color: ${(props) => props.color || 'darkorange'};
  font-size: 18px;
  text-align: center;
  font-weight: ${(props) => props.fontWeight || '400'};
`;

const Plus = styled.View`
  width: 80px;
  height: 80px;
  flex-direction: row;
  position: absolute;
  background-color: darkorange;
  bottom: 0;
  right: 0;
  border-radius: 50px;
  justify-content: center;
  margin: 5px;
  border: 2px grey;
  z-index: 1;
`;
