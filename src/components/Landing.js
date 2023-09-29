import React, { useState } from 'react';
import { useEffect } from 'react';
import { View, Text,Keyboard, TouchableOpacity, SafeAreaView, ImageBackground, Image, TextInput, ScrollView, KeyboardAvoidingView, Modal } from 'react-native';
import { mst } from '../styles/mst';
import { BackHandler, back } from 'react-native';
import Carousel from './Carousel';
import Misslides from './Slides';

const Landing = ({setModLandin}) => {

  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [inputStyle, setInputStyle] = useState(mst.inp);
  const [modCarousel, setModCarousel] = useState(false)
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
      console.log("AAAAAAAAAAAAAAAAAAAA")
      
    );

    // Asegúrate de eliminar el listener cuando el componente se desmonte
    return () => backHandler.remove();
  }, []);


  return (
    <View >
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
         onPress={()=>setModCarousel(true)}
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
