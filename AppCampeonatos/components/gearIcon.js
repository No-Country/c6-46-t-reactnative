import React from 'react';
import { View, TouchableOpacity, Text } from 'react-native';

export const GearIcon = ({ navigation }) => {
  return (
    <View
      style={{
        position: 'absolute',
        zIndex: 100,
        top: 0,
        right: '15%',
      }}
    >
      <TouchableOpacity onPress={() => navigation.navigate('Configuracion')}>
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
  );
};
