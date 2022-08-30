import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { MyButton } from '../components/myButton';
import { CheckBox } from 'react-native-btr';
import {
  setGameMode,
  setCategories,
  setAges,
  setOrganizer,
  setID,
} from '../redux/reducers/eventInfoReducer';
import { useDispatch, useSelector, useStore } from 'react-redux';
import uuid from 'react-native-uuid';

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
  const [mode, setMode] = useState(DATA.modes);
  const [categorie, setCategorie] = useState(DATA.categories);
  const [age, setAge] = useState(DATA.ages);
  const dispatch = useDispatch();

  const store = useStore().getState();
  useEffect(() => {
    const id = uuid.v4();
    dispatch(setID(id));
  }, []);
  const handleSubmit = () => {
    dispatch(setGameMode(mode));
    dispatch(setCategories(categorie));
    dispatch(setAges(age));
  };

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
        {Object.entries(DATA.modes).map((mod, index) => {
          return (
            <Checkbox
              label={mod[0]}
              data={mode}
              setMode={setMode}
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
        {Object.entries(DATA.categories).map((cat, index) => {
          return (
            <Checkbox
              label={cat[0]}
              data={categorie}
              setMode={setCategorie}
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
        {Object.entries(DATA.ages).map(([id, value], index) => {
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
              {Object.entries(value).map((categ, index) => {
                return (
                  <Checkbox
                    label={id}
                    categorie={categ[0]}
                    data={age}
                    setMode={setAge}
                    key={index}
                  />
                );
              })}
            </View>
          );
        })}
      </View>
      <MyButton text={'Crear Torneo'} dispatch={handleSubmit}></MyButton>
    </View>
  );
};

const Checkbox = ({ label, data, setMode, categorie }) => {
  const handlePress = (key, ...value) => {
    if (value[0]) {
      let newData = data[key][value[0]];
      newData = !newData;
      setMode((prev) => ({
        ...prev,
        [key]: { ...prev[key], [value[0]]: newData },
      }));
    } else {
      let newData = data[key];
      newData = !newData;
      setMode((prev) => ({ ...prev, [key]: newData }));
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
