import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';
import { useNavigation, DrawerActions } from '@react-navigation/native';
import styled from 'styled-components/native';

export const Perfil = ({ navigation }) => {
  /* const dispatch = useDispatch();
  const navigation = useNavigation(); */
  return (
    <ScrollView contentContainerStyle={{ zIndex: 1, flexGrow: 1 }}>
      <View style={{ position: 'absolute', zIndex: 100, top: 0, right: '15%' }}>
        <TouchableOpacity
          style={{}}
          onPress={() => navigation.navigate('Configuracion')}
        >
          <Text
            style={{
              top: 5,
              left: '88%',
              color: 'orange',
              fontSize: 50,
              fontWeight: '900',
              borderRadius: 50,
            }}
          >
            ⚙
          </Text>
        </TouchableOpacity>
      </View>

      <Image
        source={profile.avatar}
        style={{
          flex: 100,
          position: 'relative',
          top: 15,
          resizeMode: 'contain',
          width: '100%',
          zIndex: -100,
        }}
      />

      <View style={{ flex: 1, margin: 10 }}>
        <View
          style={{
            ...rowStyle,
            ...{ backgroundColor: 'lightgrey' },
          }}
        >
          <Cell text={'Edad'}></Cell>
          <Cell text={'Titulos'}></Cell>
        </View>
        <View style={rowStyle}>
          <Cell text={'31'}></Cell>
          <Cell text={'8'}></Cell>
        </View>
        <View
          style={{
            ...rowStyle,
            ...{ backgroundColor: 'lightgrey', justifyContent: 'flex-end' },
          }}
        >
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
        <View
          style={{
            ...rowStyle,
            ...{
              backgroundColor: 'lightgrey',
              justifyContent: 'flex-end',
            },
          }}
        >
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
    </ScrollView>
  );
};

const rowStyle = {
  flexDirection: 'row',
  paddingHorizontal: 5,
  paddingVertical: 2,
};

const Cell = ({ text }) => {
  return (
    <TextCell>
      <Text style={{ fontSize: 18 }}>{text}</Text>
    </TextCell>
  );
};

const TextCell = styled.View`
  width: 23%;
  margin-horizontal: 5px;
  align-items: center;
  border-bottom-width: 0px;
`;

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
