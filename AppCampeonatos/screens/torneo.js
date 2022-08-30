import React from 'react';
import styled from 'styled-components/native';
import { Alert, View } from 'react-native';
import { MyButton } from '../components/myButton';
import { Card } from '../components/myCard';
import { setInscription } from '../redux/reducers/userInfoReducer';
import { getInscription } from '../redux/reducers/userInfoReducer';
import { useDispatch, useSelector } from 'react-redux';

const DATA = require('../assets/datos.json');

const Texto = styled.Text`
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || '16px'};
  font-weight: ${(props) => props.fontWeight || '400'}
  margin: 5px;
`;

export const Torneo = ({ route }) => {
  const dispatch = useDispatch();
  const inscript = useSelector(getInscription);
  const { idTorneo } = route.params;
  const notInscript = !inscript.hasOwnProperty(idTorneo);

  const handleInscription = () => {
    if (notInscript) {
      dispatch(setInscription({ [idTorneo]: DATA.torneos[idTorneo] }));
      Alert.alert('Inscripcion Exitosa', "Torneo agregado a 'Mis Torneos'");
    } else {
      Alert.alert('Error en Inscripcion', 'Ya estas inscripto en este Torneo');
    }
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'rgb(20, 170, 20)',
      }}
    >
      <Card>
        <Texto color={'darkorange'} fontWeight={'bold'} fontSize={'20px'}>
          {DATA.torneos[idTorneo].name}
        </Texto>
        <Texto>
          Lugar:{' '}
          <Texto color={'darkorange'}>{DATA.torneos[idTorneo].location}</Texto>
        </Texto>
        <Texto>
          Organizador:{' '}
          <Texto color={'darkorange'}>{DATA.torneos[idTorneo].organizer}</Texto>
        </Texto>
        <Texto>
          Cierre de Inscripcion:{' '}
          <Texto color={'darkorange'}>
            {DATA.torneos[idTorneo].inscriptionDate}
          </Texto>
        </Texto>
        <Texto>
          Fecha de Inicio:{' '}
          <Texto color={'darkorange'}>{DATA.torneos[idTorneo].startDate}</Texto>
        </Texto>
        <Texto>
          Fecha de Finalizacion:{' '}
          <Texto color={'darkorange'}>{DATA.torneos[idTorneo].endDate}</Texto>
        </Texto>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Texto>Modalidades:</Texto>
          {Object.entries(DATA.torneos[idTorneo].gameMode).map(
            ([mode, value], index) =>
              value ? (
                <Texto color={'darkorange'} key={index}>
                  {' '}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Texto>
              ) : null
          )}
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Texto>Categorias Libres:</Texto>
          {Object.entries(DATA.torneos[idTorneo].categories).map(
            ([mode, value], index) =>
              value ? (
                <Texto color={'darkorange'} key={index}>
                  {' '}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Texto>
              ) : null
          )}
        </View>
        <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
          <Texto>Categorias por Edad:</Texto>
          {Object.entries(DATA.torneos[idTorneo].ages).map(
            ([mode, value], index) =>
              value ? (
                <Texto color={'darkorange'} key={index}>
                  {' '}
                  {mode.charAt(0).toUpperCase() + mode.slice(1)}
                </Texto>
              ) : null
          )}
        </View>
        <Texto>
          Descripcion:{' '}
          <Texto color={'darkorange'}>
            {DATA.torneos[idTorneo].description}
          </Texto>
        </Texto>
        {notInscript && (
          <MyButton text={'Inscribirse'} dispatch={handleInscription} />
        )}
      </Card>
    </View>
  );
};
