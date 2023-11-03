import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text,Keyboard, TouchableOpacity, SafeAreaView, ImageBackground, Image, TextInput, Alert, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';
import { mst } from '../styles/mst';
import { BackHandler, back } from 'react-native';
import Carousel from './Carousel';
import Misslides from './Slides';
import { link } from '../../navigation/globals';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Landing = ({setModLandin,setValida,setCodPersona}) => {
 
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [inputStyle, setInputStyle] = useState(mst.inp);
  const [modCarousel, setModCarousel] = useState(false)
  const [email, setEmail]= useState();
  const [pass, SetPass]= useState();
  const ip = link

 console.log(ip)
  const getcode = async () => {
    try {
      const url = 'http://'+ip+'/persona/getCodigo?email=' + email + '&password=' + pass;
      const respuesta = await axios(url);
      const resultado = respuesta.data;
      if(resultado!='Usuario no encontrado'){
        console.log("sesion iniciada");
        const obj = {
          token: resultado
        }
        await AsyncStorage.setItem('token', JSON.stringify(obj.token));
        setCodPersona(resultado)
        setValida(true)
        
        
      }
      else{
        console.log('error', resultado)
      }
     
    } catch (error) {
      console.error("Error de red:", error);
      Alert.alert("Ocurrió un error de red", "Por favor, verifica tu conexión a internet.");
    }
  }
  
  useEffect(() => {
    const backButtonHandler = () => {
      setModLandin(false)
      // Puedes mostrar una alerta, confirmar una acción o realizar otras acciones específicas.
      // Si deseas prevenir la acción de retroceso predeterminada, puedes retornar true desde aquí.
      return true; // Esto evitará que la acción de retroceso predeterminada ocurra.
    };

    // Agrega un listener para el evento de retroceso del botón de hardware
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
     
      
    );

    // Asegúrate de eliminar el listener cuando el componente se desmonte
    return () => backHandler.remove();
  }, []);


  return (
    <View >
    <ImageBackground
        source={require('../styles/img/back2.jpg')}
        style={mst.Back}
    >
    </ImageBackground>
    <View style={mst.myContainer}>
      
        <Image style={mst.logo}
        source={require('../styles/img/logo.png')}
        />
        <Text style={mst.title}>
          Chat Wave
        </Text>
       <View style={mst.btnContainer2}>
        
        <TextInput
        style={mst.inp}
          placeholder='Correo'
          placeholderTextColor='gray'
          value={email}
          onChangeText={setEmail}
        >
        </TextInput>
        <TextInput
        style={mst.inp}
          placeholder='Contraseña'
          placeholderTextColor='gray'
          secureTextEntry={true}
          value={pass}
          onChangeText={SetPass}
        >
        </TextInput>
        <TouchableOpacity
         style={mst.btn}
         onPress={()=>getcode()}
        >
          <Text>Ingresar</Text>
        </TouchableOpacity>

        <TouchableOpacity
         style={mst.btn}
         onPress={()=>setModLandin(false)}
        >
          <Text>Regresar</Text>
        </TouchableOpacity>
       </View>
    </View>
    <Modal
    visible={modCarousel}
    >
    <Misslides/>
    </Modal>
    
   </View>
  );
};

export default Landing;
