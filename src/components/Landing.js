import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text,Keyboard, TouchableOpacity, SafeAreaView, ImageBackground, Image, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native';
import { mst } from '../styles/mst';
import { BackHandler,backHandler } from 'react-native';

const Landing = ({setModLandin}) => {

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [inputStyle, setInputStyle] = useState(mst.inp);
  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      () => {
        setIsKeyboardOpen(true);
        setInputStyle([mst.btnContainer, { marginTop:30 }]); // Cambia el estilo del input cuando se muestra el teclado
      }
    );

    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      () => {
        setIsKeyboardOpen(false);
        setInputStyle(mst.btnContainer); // Restaura el estilo original del input cuando se oculta el teclado
      }
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, []);
  console.log('Componente montado'); // Agrega esta línea
  useEffect(() => {
    const backHandler = BackHandler.addEventListener('hardwareBackPress', () => {
      console.log('Se presionó el botón de retroceso');
      // Puedes realizar otras acciones aquí si lo deseas
      return true; // Devuelve true para prevenir el comportamiento predeterminado de retroceso
    });

    // Limpia el event listener cuando el componente se desmonta
    return () => {
      backHandler.remove();
    };
  }, []);

  return (
    <SafeAreaView >
    <ImageBackground
        source={require('../styles/img/back.jpg')}
        style={mst.Back}
    >
    </ImageBackground>
    <View style={mst.myContainer}>
      
        <Image style={mst.logo}
        source={require('../styles/img/logo.jpg')}
        />
        <Text style={mst.title}>
          Chat Wave
        </Text>
       <View style={mst.btnContainer2}>
        
        <TextInput
        style={mst.inp}
          placeholder='Correo'
          placeholderTextColor='gray'
        >
        </TextInput>
        <TextInput
        style={mst.inp}
          placeholder='Contraseña'
          placeholderTextColor='gray'
          secureTextEntry={true}
        >
        </TextInput>
        <TouchableOpacity
         style={mst.btn}
        >
          <Text>Ingresar</Text>
        </TouchableOpacity>

       </View>
    </View>
   
   </SafeAreaView>
  );
};

export default Landing;
