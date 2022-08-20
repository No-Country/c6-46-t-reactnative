import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text, Image } from 'react-native';
import { MyButton } from '../components/myButton';
import { Rankings } from './rankings';
import { Settings } from './settings';
import { Torneo } from './torneo';
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';

export const Perfil = ({ navigation }) => {
  const dispatch = useDispatch();
  return (
    <View>
      <Image source={profile.avatar} />
      <Text>{profile.lastName}</Text>
      <Text>{profile.firstName}</Text>
      <Text>{profile.sports[0]}</Text>
      <Text>{profile.teams[0]}</Text>
      <MyButton
        text="Cerrar Sesion"
        dispatch={() => dispatch(setLoggedState())}
      />
    </View>
  );
};

const profile = {
  avatar: {
    uri: 'https://images.unsplash.com/photo-1544765773-a8dce1f272f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80',
    width: 200,
    height: 200,
  },
  firstName: 'Albert',
  lastName: 'Wesker',
  age: '45',
  sports: ['Futbol'],
  teams: ['S.t.a.r.s'],
};
