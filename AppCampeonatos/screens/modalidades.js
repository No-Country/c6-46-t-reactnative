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
      <Text style={{ marginHorizontal: 10, marginTop: 10, fontWeight: '600' }}>
        Modos
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 5,
          borderRadius: 5,
          borderWidth: 1,
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
      <Text style={{ marginHorizontal: 10, marginTop: 10, fontWeight: '600' }}>
        Categorias Libres
      </Text>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
          margin: 5,
          borderRadius: 5,
          borderWidth: 1,
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
      <Text style={{ marginHorizontal: 10, marginTop: 10, fontWeight: '600' }}>
        Categorias por Edad
      </Text>
      <View
        style={{
          flex: 1,
          margin: 5,
          borderRadius: 5,
          borderWidth: 1,
          paddingTop: 5,
          justifyContent: 'flex-start',
          alignSelf: 'stretch',
        }}
      >
        {Object.entries(DATA.ages).map(([age, value], index) => {
          return (
            <View style={{ flex: 1, flexDirection: 'row' }} key={index}>
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
        marginVertical: 10,
        marginHorizontal: 5,
      }}
    >
      {categorie === undefined ? (
        <Text>{label}</Text>
      ) : (
        <Text>{'+' + label + ' ' + categorie}</Text>
      )}
      <View style={{ width: 20, marginHorizontal: 5 }}>
        <CheckBox
          onPress={() => handlePress(label, categorie)}
          checked={categorie ? data[label][categorie] : data[label]}
        />
      </View>
    </View>
  );
};
