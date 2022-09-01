import React, { useEffect, useState } from 'react';
import { View, Text, TextInput } from 'react-native';
import Ionicon from '@expo/vector-icons/Ionicons';

export const MyInput = ({ label, action }) => {
  const [showPass, setShowPass] = useState(false);

  const handleChange = (newInput) => {
    if (action) {
      action(newInput);
    }
  };
  const handleShowPass = () => {
    setShowPass(!showPass);
  };

  const toRender = () => {
    if (label === 'Contraseña' && showPass) {
      return <Icon name={'eye-outline'} onPress={handleShowPass} />;
    } else if (label === 'Contraseña' && !showPass) {
      return <Icon name={'eye-off-outline'} onPress={handleShowPass} />;
    } else {
      return null;
    }
  };
  return (
    <View style={{ marginTop: 10, marginLeft: 10 }}>
      <Text style={{ fontSize: 22, fontWeight: '500' }}>{label}:</Text>
      <View
        style={{
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 5,
        }}
      >
        <TextInput
          secureTextEntry={label === 'Contraseña' ? !showPass : null}
          onChangeText={handleChange}
          style={{
            width: '90%',
            borderRadius: 5,
            borderWidth: 1,
            paddingVertical: 5,
            paddingHorizontal: 5,
            fontWeight: '500',
            fontSize: 18,
          }}
        />
        {toRender()}
      </View>
    </View>
  );
};

const Icon = ({ name, onPress }) => {
  return (
    <Text
      style={{
        position: 'absolute',
        right: '12%',
        top: '10%',
      }}
      onPress={onPress}
    >
      <Ionicon name={name} size={30} color="grey"></Ionicon>
    </Text>
  );
};
