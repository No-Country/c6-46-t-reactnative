import React from 'react';
import styled from 'styled-components/native';
import { View, Text, Image, ScrollView } from 'react-native';
import { GearIcon } from '../components/gearIcon';

export const Perfil = ({ navigation }) => {
  return (
    <>
      <GearIcon navigation={navigation} />
      <ScrollView contentContainerStyle={{ zIndex: 1, flexGrow: 1 }}>
        <View
          style={{
            backgroundColor: 'hsl(0, 0%,85%)',
            position: 'absolute',
            opacity: 0.5,
            width: '100%',
            top: '40%',
            zIndex: 0,
            height: '28%',
          }}
        >
          <Text
            style={{
              color: 'black',
              fontWeight: '900',
              top: 7,
              letterSpacing: 5.5,
              fontSize: 36,
            }}
          >
            Gabriela Gomez Carrera
          </Text>
        </View>
        <Image
          source={profile.avatar}
          style={{
            flex: 100,
            position: 'relative',
            top: 1,
            resizeMode: 'cover',
            width: '100%',
            zIndex: -100,
          }}
        />

        <View style={{ flex: 1, margin: 10 }}>
          <View
            style={{
              ...rowStyle,
              ...{ backgroundColor: 'darkorange' },
            }}
          >
            <Cell text={'Edad'} color={'white'}></Cell>
            <Cell text={'Titulos'} color={'white'}></Cell>
          </View>
          <View style={rowStyle}>
            <Cell text={'31'}></Cell>
            <Cell text={'8'}></Cell>
          </View>
          <View
            style={{
              ...rowStyle,
              ...{ backgroundColor: 'darkorange', justifyContent: 'flex-end' },
            }}
          >
            <Cell></Cell>
            <Cell text={'Rank'} color={'white'}></Cell>
            <Cell text={'Victorias'} color={'white'}></Cell>
            <Cell text={'Derrotas'} color={'white'}></Cell>
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
                backgroundColor: 'darkorange',
                justifyContent: 'flex-end',
              },
            }}
          >
            <Cell></Cell>
            <Cell text={'Rank'} color={'white'}></Cell>
            <Cell text={'Victorias'} color={'white'}></Cell>
            <Cell text={'Derrotas'} color={'white'}></Cell>
          </View>
          <View style={rowStyle}>
            <Cell text={'Historico'}></Cell>
            <Cell text={'3'}></Cell>
            <Cell text={'5'}></Cell>
            <Cell text={'5'}></Cell>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const rowStyle = {
  flexDirection: 'row',
  paddingHorizontal: 5,
  paddingVertical: 2,
};

const Cell = ({ text, color }) => {
  return (
    <TextCell>
      <Text
        style={{ fontSize: 20, color: color || 'black', fontWeight: '600' }}
      >
        {text}
      </Text>
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
    uri: 'https://images.unsplash.com/photo-1605395630162-1c7cc7a34590?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1974&q=80',
  },
  firstName: 'Albert',
  lastName: 'Wesker',
  age: '45',
  sports: ['Futbol'],
  teams: ['S.t.a.r.s'],
};
