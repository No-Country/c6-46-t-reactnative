import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import styled from 'styled-components/native';

export const Perfil = ({ navigation }) => {
  /* const dispatch = useDispatch();
  const navigation = useNavigation(); */
  return (
    <View style={{ flex: 1 }}>
      <TouchableOpacity onPress={() => navigation.navigate('Configuracion')}>
        <Text
          style={{
            position: 'relative',
            top: 5,
            left: '88%',
            color: 'orange',
            fontSize: 36,
            fontWeight: '900',
            borderRadius: 50,
          }}
        >
          ⚙
        </Text>
      </TouchableOpacity>
      <Image
        source={profile.avatar}
        style={{
          flex: 2,
          position: 'relative',
          top: '-7%',
          resizeMode: 'contain',
          width: '100%',

          zIndex: -10,
        }}
      />
      <View style={{ flex: 1, margin: 10 }}>
        <View style={rowStyle}>
          <Cell text={'Edad'}></Cell>
          <Cell text={'Titulos'}></Cell>
        </View>
        <View style={rowStyle}>
          <Cell text={'31'}></Cell>
          <Cell text={'8'}></Cell>
        </View>
        <View style={rowStyle}>
          <Cell></Cell>
          <Cell text={'Rank'}></Cell>
          <Cell text={'Victorias'}></Cell>
          <Cell text={'Derrotas'}></Cell>
        </View>
        <View style={rowStyle}>
          <Cell text={'Actual'}></Cell>
          <Cell text={'14'}></Cell>
          <Cell text={'5'}></Cell>
          <Cell text={'5'}></Cell>
        </View>
        <View style={rowStyle}>
          <Cell></Cell>
          <Cell text={'Rank'}></Cell>
          <Cell text={'Victorias'}></Cell>
          <Cell text={'Derrotas'}></Cell>
        </View>
        <View style={rowStyle}>
          <Cell text={'Historico'}></Cell>
          <Cell text={'3'}></Cell>
          <Cell text={'5'}></Cell>
          <Cell text={'5'}></Cell>
        </View>
      </View>
    </View>
  );
};

const rowStyle = {
  flexDirection: 'row',
  paddingHorizontal: 10,
  paddingVertical: 2,
};

const Cell = ({ text }) => {
  return (
    <TextCell>
      <Text>{text}</Text>
    </TextCell>
  );
};

const TextCell = styled.View`
  width: 23%;
  align-items: flex-end;
  border-bottom-width: 1px;
`;

const TableRow = () => {};

const profile = {
  avatar: {
    uri: 'https://images.unsplash.com/photo-1544765773-a8dce1f272f6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1994&q=80',
  },
  firstName: 'Albert',
  lastName: 'Wesker',
  age: '45',
  sports: ['Futbol'],
  teams: ['S.t.a.r.s'],
};
