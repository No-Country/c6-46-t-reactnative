import React, { useEffect, useState } from 'react';
import styled from 'styled-components/native';
import { Alert, View, Text, ScrollView } from 'react-native';
import { MyButton } from '../components/myButton';
import { Card } from '../components/myCard';
import { setInscriptions } from '../redux/reducers/userInfoReducer';
import { getInscriptions } from '../redux/reducers/userInfoReducer';
import { useDispatch, useSelector } from 'react-redux';

const DATA = require('../assets/datos.json');

export const Torneo = ({ route }) => {
  const [idTorneo, setIdTorneo] = useState(1);
  const [toRender, setToRender] = useState(DATA.torneos[idTorneo]);
  const dispatch = useDispatch();
  const inscript = useSelector(getInscriptions);
  const notInscript = !inscript.hasOwnProperty(idTorneo);

  useEffect(() => {
    setIdTorneo(route.params.idTorneo);
    setToRender({ ...DATA.torneos[idTorneo], ...inscript[idTorneo] });
  }, [idTorneo]);

  const handleInscription = () => {
    if (notInscript) {
      dispatch(setInscriptions({ [idTorneo]: DATA.torneos[idTorneo] }));
      Alert.alert(
        'Inscripcion Exitosa 🎉',
        "Torneo agregado. \n\n'Torneos' -> 'Mis Torneos'"
      );
    } else {
      Alert.alert(
        'Error en Inscripcion 🔥',
        'Ya estas inscripto en este Torneo'
      );
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flex: 1 }}>
      <View
        style={{
          flex: 1,
          justifyContent: 'flex-start',
          alignItems: 'center',
          backgroundColor: 'rgb(100, 180, 100)',
        }}
      >
        <Card>
          <Texto color={'darkorange'} fontWeight={'bold'} fontSize={'26px'}>
            {toRender.name}
          </Texto>
          <Texto>
            Lugar:{' '}
            <Texto color={'darkorange'} fontWeight={'bold'}>
              {toRender.location}
            </Texto>
          </Texto>
          <Texto>
            Organizador:{' '}
            <Texto color={'darkorange'} fontWeight={'bold'}>
              {toRender.organizer}
            </Texto>
          </Texto>
          <Texto>
            Cierre de Inscripcion:{' '}
            <Texto color={'darkorange'} fontWeight={'bold'}>
              {toRender.inscriptionDate}
            </Texto>
          </Texto>
          <Texto>
            Fecha de Inicio:{' '}
            <Texto color={'darkorange'} fontWeight={'bold'}>
              {toRender.startDate}
            </Texto>
          </Texto>
          <Texto>
            Fecha de Finalizacion:{' '}
            <Texto color={'darkorange'} fontWeight={'bold'}>
              {toRender.endDate}
            </Texto>
          </Texto>
          <Texto>Modalidades:</Texto>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {Object.entries(toRender.gameMode).map(([mode, value], index) =>
              value ? (
                <Texto color={'darkorange'} fontWeight={'bold'} key={index}>
                  {' '}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Texto>
              ) : null
            )}
          </View>
          <Texto>Categorias Libres:</Texto>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {Object.entries(toRender.categories).map(([mode, value], index) =>
              value ? (
                <Texto color={'darkorange'} fontWeight={'bold'} key={index}>
                  {' '}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Texto>
              ) : null
            )}
          </View>
          <Texto>Categorias por Edad:</Texto>
          <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
            {Object.entries(toRender.ages).map(([mode, value], index) =>
              value ? (
                <Texto color={'darkorange'} fontWeight={'bold'} key={index}>
                  {' '}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Texto>
              ) : null
            )}
          </View>
          <Texto>Descripcion: </Texto>
          <Texto color={'darkorange'} fontWeight={'bold'}>
            {toRender.description}
          </Texto>
          {notInscript && (
            <MyButton text={'Inscribirse'} dispatch={handleInscription} />
          )}
        </Card>
      </View>
    </ScrollView>
  );
};

const Texto = styled.Text`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '20px'};
  font-weight: ${(props) => props.fontWeight || '400'}
  margin: 5px;
`;
