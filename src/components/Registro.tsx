import React, { useEffect } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Modal,
  TextInput,
  Dimensions,
  Alert,
} from 'react-native';
import { useState } from 'react';
import Landing from './Landing';
import { mst } from '../styles/mst';
import { ProgressSteps, ProgressStep } from 'react-native-progress-steps';
import { Mycolors } from '../styles/color';
import DateTimePicker from '@react-native-community/datetimepicker';
import RNDateTimePicker from '@react-native-community/datetimepicker';
import axios from 'axios';
import { AxiosError } from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { link } from '../../navigation/globals';

const Registro = ({ modRegistro, setModRegistro,setValida,setCodPersona }) => {
  const tempId=1;
  const [date, setDate] = useState(new Date());
  const [showPicker, setShowPicker] = useState(false);
  const [Nombre, setNombre] = useState();
  const [Apellido, setApellido] = useState();
  const [Telefono, setTelefono] = useState();
  const [email, setEmail] = useState();
  const [contraseña, setContraseña] = useState();
  const [confirmacion, setConfirmacion] = useState();

 


const onChange = (event, selectedDate) => {
  const currentDate = selectedDate || date;
  setShowPicker(Platform.OS === 'ios');
  setDate(currentDate);
};

const showDatePicker = () => {
  setShowPicker(true);
};
const formatDate = date => {
  return moment(date).format('LL');
};

onSubmit = () => {
  console.log('onsubmit pressed');

  const datos = [Nombre, Apellido, Telefono, email, contraseña, confirmacion];


  if (datos.includes()) {
    Alert.alert(
      'Aviso!',
      'Todos los campos son obligatorios, por favor ingrese todo los datos solicitados.',
      [{ text: 'Aceptar' }],
    );
    return;
  } if (contraseña !== confirmacion) {
    Alert.alert(
      'Aviso!',
      'Las contraseñas no coinciden.',
      [{ text: 'Aceptar' }],
    );
    return;
    
  }
  const nuevo = {
    nombre: Nombre, apellido: Apellido, telefono: Telefono, correo: email, fechaNac: date, contra: contraseña
  }
  const guardarPersona = async () => {
    try {
      console.log(nuevo)
      const url = 'http://'+link+'/persona/insert'
      const respuesta = await axios.post(url, nuevo)
      const resultado = respuesta.data;
      if (resultado !== ""){
        Alert.alert("Su usuario ha sido creado exitosamente")
        const obj={
          token:resultado
        }
        await AsyncStorage.setItem('token', JSON.stringify(obj.token));
        setValida(true)
        setCodPersona(resultado)
      } else{
        Alert.alert("Ocurrio un error!", resultado.mensaje)
        console.log(resultado)
      }
  
    }

    catch (error: AxiosError | any) {
      if (error.response) {
        // Respuesta del servidor con detalles de error
        console.log('Error de respuesta del servidor:', error.response.data);
      } else if (error.request) {
        // La solicitud se hizo, pero no se recibió respuesta
        console.log('No se recibió respuesta del servidor:', error.request);
      } else {
        // Otros errores
        console.log('Error al hacer la solicitud:', error.message);
      }
    }

  }
  guardarPersona()
};
const buttonTextStyleNext = {
  width: 100,
  height: 40,
  backgroundColor: Mycolors.high,
  borderRadius: 5,
  padding: 8,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: Mycolors.dark,
  marginBottom: -35,
  marginRight: -60,
  marginLeft: 30,
  color: 'white',
  fontWeight: '300',
  fontSize: 15,
  textAlign: 'center',
};
const buttonTextStyle = {
  width: 100,
  height: 40,
  backgroundColor: Mycolors.high,
  borderRadius: 5,
  padding: 8,
  justifyContent: 'center',
  alignItems: 'center',
  borderWidth: 2,
  borderColor: Mycolors.dark,
  marginBottom: -35,
  marginRight: -60,
  marginLeft: -55,
  color: 'white',
  fontWeight: '300',
  fontSize: 15,
  textAlign: 'center',
};
return (
  <View>
    <ImageBackground
      source={require('../styles/img/back2.jpg')}
      style={mst.Back}></ImageBackground>
    <View style={mst.myContainer}>
      <View style={mst.btnContainer2}>
        <Text>Ingrese los datos solicitados para registrarse</Text>
        <ProgressSteps>
          <ProgressStep
            nextBtnTextStyle={buttonTextStyleNext}
            previousBtnTextStyle={buttonTextStyle}>
            <View style={mst.stepsContainer}>
              <TextInput
                style={mst.inp}
                placeholder="Nombre"
                onChangeText={setNombre}
                value={Nombre}
                placeholderTextColor="gray"></TextInput>
              <TextInput
                style={mst.inp}
                placeholder="Apellido"
                onChangeText={setApellido}
                value={Apellido}
                placeholderTextColor="gray"></TextInput>
              <TextInput
                style={mst.inp}
                placeholder="Telefono"
                placeholderTextColor="gray"
                keyboardType="numeric"
                onChangeText={setTelefono}
                value={Telefono}
                maxLength={8}></TextInput>

              <TouchableOpacity
                style={mst.datePicker}
                onPress={showDatePicker}>
                <Text>{date.toLocaleString()}</Text>
              </TouchableOpacity>
              <Text>Ingrese su fecha de nacimiento</Text>
              {showPicker && (
                <DateTimePicker
                  value={date}
                  mode="date"
                  display="default"
                  onChange={onChange}
                />
              )}
            </View>
          </ProgressStep>
          <ProgressStep
            onSubmit={this.onSubmit}
            nextBtnTextStyle={buttonTextStyleNext}
            previousBtnTextStyle={buttonTextStyle}>
            <View style={{ alignItems: 'center' }}>
              <TextInput
                style={mst.inp}
                placeholder="e-mail"
                keyboardType="email-address"
                onChangeText={setEmail}
                value={email}
                placeholderTextColor="gray"></TextInput>
              
              <View>
              <Text style={mst.label}>
                Ingrese una contraseña de almenos 8 caracteres
              </Text>
              </View>
              <TextInput
                style={mst.inp}
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={setContraseña}
                value={contraseña}
                placeholderTextColor="gray"></TextInput>
              <Text style={mst.label}>Repita la contraseña</Text>
              <TextInput
                style={mst.inp}
                placeholder="Contraseña"
                secureTextEntry={true}
                onChangeText={setConfirmacion}
                value={confirmacion}
                placeholderTextColor="gray"></TextInput>
            </View>
          </ProgressStep>
        </ProgressSteps>

        <TouchableOpacity
          style={mst.btn}
          onPress={() => {
            setModRegistro(false);
            
          }}
                    
          >
          <Text>Regresar</Text>
        </TouchableOpacity>
      </View>
    </View>
  </View>
);
};

export default Registro;
