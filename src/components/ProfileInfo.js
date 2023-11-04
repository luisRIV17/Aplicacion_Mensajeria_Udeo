import React, {useEffect} from 'react';
import {mst} from '../styles/mst';
import {useState} from 'react';
import {
  SafeAreaView,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import { link } from '../../navigation/globals';
import axios from 'axios';

const ProfileInfo = ({navigate, route}) => {
  const {codper}=route.params

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [telefono, setTelefono] = useState('');
  const [leyenda, setLeyenda] = useState('');
  const [cambioDetectado, setCambioDetectado] = useState(false);
    const ip = link 
  useEffect(() => {
    const loadDataPersona = async () => {
      try {
        const url =
          'http://' + ip + '/persona/datos?idpersona='+codper
          console.log(url)
        const respuesta = await axios(url);
        const resultado = respuesta.data;
        console.log(resultado)
        setNombre(resultado.nombre)
        setApellido(resultado.apellido)
        setCorreo(resultado.correo)
        setLeyenda(resultado.leyenda)
        setTelefono(resultado.tel)
      } catch (error) {
        console.error(error);
      }
    };

    loadDataPersona();
  }, []);
   const acutalizarleyenda = async () => {
if(leyenda.length===0){
  Alert.alert('Error','Debe llenar el campo de leyenda', [{text:'Aceptar'}])
  return
   }
   const nuevaleyenda={
    idpersona: codper.toString(),
    leyenda:leyenda,
   }
   const url='http://'+ip+'/persona/leyenda'
   const respuesta=await axios.put(url,nuevaleyenda)
   const resultado =await respuesta.data
console.log(resultado)
  }
  const handleInputChange = text => {
    setLeyenda(text);
    setCambioDetectado(true);
  };

  const handleActualizar = () => {
    setCambioDetectado(false);
  };

  return (
    <View style={mst.cardBack}>
      <View style={mst.imgContainer}>
        <Image style={mst.imgStyle} source={require('../styles/img/1.png')} />
      </View>
      <View style={mst.datosContainer}>
        <Text style={mst.label2}>{nombre}</Text>
        <Text style={mst.label1}>Nombres</Text>
        <Text style={mst.label2}>{apellido}</Text>
        <Text style={mst.label1}>Apellido</Text>
        <TextInput
          value={leyenda}
          onChangeText={handleInputChange}
          style={mst.label2}></TextInput>
        <Text style={mst.label1}>Leyenda</Text>
        <Text style={mst.label2}>{correo}</Text>
        <Text style={mst.label1}>Correo</Text>
        <Text style={mst.label2}>{telefono}</Text>
        <Text style={mst.label1}>Telefono</Text>
        {cambioDetectado && (
          <TouchableOpacity onPress={acutalizarleyenda}>
            <Text style={mst.actulizarBtn}>Actualizar</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default ProfileInfo;
