import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useDispatch } from 'react-redux';
import { setLoggedState } from '../redux/reducers/isLoggedReducer';
import { useNavigation, DrawerActions } from '@react-navigation/native';

export const Perfil = ({ navigation }) => {
  /* const dispatch = useDispatch();
  const navigation = useNavigation(); */
  return (
    <View style={{ height: '100%', width: '100%' }}>
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
          flex: 1,
          position: 'absolute',
          resizeMode: 'contain',
          width: '100%',
          height: '70%',
          zIndex: -10,
        }}
      />
      <Text>{profile.lastName}</Text>
      <Text>{profile.firstName}</Text>
      <Text>{profile.sports[0]}</Text>
      <Text>{profile.teams[0]}</Text>
    </View>
  );
};

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
