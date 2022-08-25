import React, { useState } from 'react';
import { View, Text } from 'react-native';
import { MyButton } from '../components/myButton';
import { CheckBox } from 'react-native-btr';
import {
  setGameMode,
  setCategories,
  setAges,
} from '../redux/reducers/eventInfoReducer';

const DATA = {
  modes: {
    Femenino: false,
    Masculino: false,
    'Doble-Femenino': false,
    'Doble-Masculino': false,
    'Doble-Mixto': false,
  },
  categories: { A: false, B: false, C: false, D: false },
  ages: {
    30: { A: false, B: false, C: false, D: false },
    35: { A: false, B: false, C: false, D: false },
    40: { A: false, B: false, C: false, D: false },
    45: { A: false, B: false, C: false, D: false },
    50: { A: false, B: false, C: false, D: false },
    55: { A: false, B: false, C: false, D: false },
    60: { A: false, B: false, C: false, D: false },
  },
};

export const Modalidades = ({}) => {
  const [modes, setModes] = useState(DATA.modes);
  const [categories, setCategories] = useState(DATA.categories);
  const [ages, setAges] = useState(DATA.ages);

  return (
    <View style={{ flex: 1 }}>
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 5,
          fontWeight: '600',
          fontSize: 18,
        }}
      >
        Modos
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 15,
          borderRadius: 5,
          borderWidth: 1,
          justifyContent: 'center',
        }}
      >
        {Object.entries(DATA.modes).map((mode, index) => {
          return (
            <Checkbox
              label={mode[0]}
              data={modes}
              setModes={setModes}
              key={index}
            />
          );
        })}
      </View>
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 5,
          fontWeight: '600',
          fontSize: 18,
        }}
      >
        Categorias Libres
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          marginHorizontal: 15,
          borderRadius: 5,
          borderWidth: 1,
          justifyContent: 'center',
        }}
      >
        {Object.entries(DATA.categories).map((categorie, index) => {
          return (
            <Checkbox
              label={categorie[0]}
              data={categories}
              setModes={setCategories}
              key={index}
            />
          );
        })}
      </View>
      <Text
        style={{
          marginHorizontal: 10,
          marginTop: 0,
          fontWeight: '600',
          fontSize: 18,
        }}
      >
        Categorias por Edad
      </Text>
      <View
        style={{
          flex: 1,
          marginHorizontal: 15,
          borderRadius: 5,
          alignItems: 'center',
          justifyContent: 'space-around',
          paddingVertical: 5,
        }}
      >
        {Object.entries(DATA.ages).map(([age, value], index) => {
          return (
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                flexWrap: 'wrap',
                borderTopWidth: 1,
                alignContent: 'center',
                paddingTop: 5,
                marginTop: 5,
              }}
              key={index}
            >
              {Object.entries(value).map((categorie, index) => {
                return (
                  <Checkbox
                    label={age}
                    categorie={categorie[0]}
                    data={ages}
                    setModes={setAges}
                    key={index}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
      <MyButton text={'Continuar'}></MyButton>
    </View>
  );
};

const Checkbox = ({ label, data, setModes, categorie }) => {
  const handlePress = (key, ...value) => {
    if (value[0]) {
      let newData = data[key][value[0]];
      newData = !newData;
      setModes((prev) => ({
        ...prev,
        [key]: { ...prev[key], [value[0]]: newData },
      }));
    } else {
      let newData = data[key];
      newData = !newData;
      setModes((prev) => ({ ...prev, [key]: newData }));
    }
  };
  return (
    <View
      style={{
        flexDirection: 'row',
        justifyContent: 'flex-end',
        marginVertical: 2,
        marginHorizontal: 10,
      }}
    >
      {categorie === undefined ? (
        <Text style={{ fontWeight: '500', fontSize: 16 }}>{label}</Text>
      ) : (
        <Text style={{ fontWeight: '500' }}>
          {'+' + label + ' ' + categorie}
        </Text>
      )}
      <View style={{ marginHorizontal: 5 }}>
        <CheckBox
          onPress={() => handlePress(label, categorie)}
          checked={categorie ? data[label][categorie] : data[label]}
        />
      </View>
    </View>
  );
};
