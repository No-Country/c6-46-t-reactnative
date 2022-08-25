import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  KeyboardAvoidingView,
  TouchableWithoutFeedback,
  Keyboard,
  Platform,
} from 'react-native';
import { MyInput } from '../components/myInput';
import { MyButton } from '../components/myButton';
import DatePicker from 'react-native-modern-datepicker';
import {
  setName,
  setDescription,
  setLocation,
  setStartDate,
  setEndDate,
  setInscriptionDate,
  setEliminatories,
  setOrganizer,
  getInscriptionDate,
  getEndDate,
  getStartDate,
} from '../redux/reducers/eventInfoReducer';
import { useDispatch, useSelector } from 'react-redux';

export const CrearTorneo = ({ navigation }) => {
  const [showModal, setShowModal] = useState(false);
  const [calendarID, setCalendarID] = useState('');
  const dispatch = useDispatch();

  const handlePress = (id) => {
    setShowModal(!showModal);
    setCalendarID(id);
  };
  const handleSelect = (input) => {
    switch (calendarID) {
      case 1:
        dispatch(setStartDate(input));
        break;
      case 2:
        dispatch(setEndDate(input));
        break;
      case 3:
        dispatch(setInscriptionDate(input));
        break;
    }
    handlePress();
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      style={{ flex: 1 }}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={{ flex: 1 }}>
          <MyInput
            label={'Nombre del Torneo'}
            action={(data) => dispatch(setName(data))}
          />
          <MyInput
            label={'Descripcion del Torneo'}
            action={(data) => dispatch(setDescription(data))}
          />
          <MyInput
            label={'Ubicacion'}
            action={(data) => dispatch(setLocation(data))}
          />
          <View
            style={{
              flex: 1,
              flexDirection: 'column',
              marginTop: 15,
              marginHorizontal: 10,
            }}
          >
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'baseline',
                justifyContent: 'space-around',
              }}
            >
              <Calendar
                id={3}
                label={'Cierre de Inscripcion'}
                date={useSelector(getInscriptionDate)}
                handlePress={handlePress}
              />
              <Calendar
                id={1}
                label={'Inicio del Evento'}
                date={useSelector(getStartDate)}
                handlePress={handlePress}
              />
              <Calendar
                id={2}
                label={'Finalizacion del Evento'}
                date={useSelector(getEndDate)}
                handlePress={handlePress}
              />
            </View>
            {showModal && (
              <View
                style={{
                  position: 'absolute',
                  top: '-40%',
                  width: '100%',
                  height: '80%',
                }}
              >
                <DatePicker
                  onSelectedChange={(date) => handleSelect(date)}
                  style={{ flex: 1 }}
                ></DatePicker>
              </View>
            )}
            <MyButton
              text={'Continuar'}
              toScreen={'Modalidades'}
              navigation={navigation}
            ></MyButton>
          </View>
        </View>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
};

const Calendar = ({ label, id, date, handlePress }) => {
  return (
    <TouchableOpacity
      onPress={() => handlePress(id)}
      style={{ width: '30%', justifyContent: 'flex-start' }}
    >
      <Text style={{ fontSize: 16, fontWeight: '500' }}>{label}:</Text>
      <TextInput
        style={{
          width: '100%',
          height: '10%',
          alignSelf: 'center',
          margin: 10,
          paddingVertical: 3,
          paddingHorizontal: 5,
          borderWidth: 1,
          borderRadius: 5,
          color: 'hsl(0,0%,45%)',
          fontWeight: '500',
        }}
        editable={false}
        value={date}
      ></TextInput>
    </TouchableOpacity>
  );
};
