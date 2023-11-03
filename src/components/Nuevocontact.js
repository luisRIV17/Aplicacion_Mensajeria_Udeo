import axios from 'axios';
import React, { useState } from 'react';
import { View, Text, TextInput,Pressable,Image,Alert,TouchableOpacity, Button, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome'; 
const Nuevocontact = ({navigation,route}) => {
  const {persona}=route.params
  const {enlace}=route.params
  const {setEnviar}=route.params
  const [nombreAlias, setNombreAlias] = useState('');
  const [telefono, setTelefono] = useState('');
  const [correo, setCorreo] = useState('');

  const guardar =async() => {
    console.log(1)  
    if( telefono=='' || correo=='')
    {
      Alert.alert('Error','Debe llenar los campos de telefono y correo', [{text:'Aceptar'}])
      return
    }
    const nuevocontacto={
      idpersona: persona.toString(),
      nombrealias:nombreAlias,
      correo:correo,
      telefono:telefono,
    }
    console.log(nuevocontacto) 
    const url="http://"+enlace+"/contacto/insert"
    console.log(url)  
    const respuesta=await axios.post(url,nuevocontacto)
    const resultado =await respuesta.data
    if(resultado)
    {
      setEnviar(true)
      navigation.navigate('contactos', {enlace: enlace, persona: persona,setEnviar});
      
    }
    else[
      Alert.alert('Error','Persona no registrada en la base de datos de Wave', [{text:'Aceptar'}])
    ]

  };
  return (
    <View style={styles.container}>
     <View style={styles.enca}>
    <View style={styles.enca}>
    <TouchableOpacity onPress={() => navigation.goBack()}>
    <Image source={require('../styles/img/back.png')} style={{width:25,height:25, marginHorizontal:10}}/>
        </TouchableOpacity>
    
<Text style={styles.titulo}>Crear Contacto</Text>
</View>

</View>
      <View style={styles.cont}>
        <View style={styles.formGroup}>
        <Image source={require('../styles/img/contacto.png')} style={{width:25,height:25}}/>
          <TextInput
            style={styles.input}
            placeholder="Nombre o Alias"
            value={nombreAlias}
            onChangeText={setNombreAlias}
          />
        </View>
        <View style={styles.formGroup}>
        <Image source={require('../styles/img/telefono.png')} style={{width:25,height:25}}/>
          <TextInput
            style={styles.input}
            placeholder="Teléfono"
            value={telefono}
            onChangeText={setTelefono}
          />
        </View>
        <View style={styles.formGroup}>
        <Image source={require('../styles/img/correo.png')} style={{width:25,height:25}}/>
          <TextInput
            style={styles.input}
            placeholder="Correo Electronico"
            value={correo}
            onChangeText={setCorreo}
          />
        </View>
        <Pressable style={styles.btguardar} 
        onPress={guardar}
        >
          <Text style={{color:'black', fontWeight:'bold',fontSize:20}}>Guardar</Text>
        </Pressable>
      </View>
     
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Cambiar el color de fondo según tus necesidades
  
  },
  cont:
  {
    padding:20
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#252525', // Color de fondo del encabezado
    padding: 10,
    marginBottom: 20,
  },
  headerText: {
    fontSize: 20,
    color: '#fff', // Color del texto del encabezado
  },
  formGroup: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 15,
  },
  input: {
    flex: 1,
    marginLeft: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    padding: 5,
  },
  enca:{
    flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center', 
     paddingVertical: 10,
     backgroundColor:'#252525'
},
titulo:{
    fontSize: 20, 
    color:'white',
    fontWeight: 'bold',
   
},
btmenu:{
    backgroundColor:'#02abbf',
    padding:10
 },
 txbt:{
     fontSize:15,
 color:'white'
 },
 imge: {
    width: 35,
    height: 35,
  marginRight:10
    
  },
btguardar:{
    backgroundColor:'#437d81',
    padding:10,
    alignItems:'center',
    borderRadius:10,
    marginHorizontal:20,
    marginVertical:20
 },
 txbt:{
     fontSize:15,
 color:'white'
 },
});

export default Nuevocontact