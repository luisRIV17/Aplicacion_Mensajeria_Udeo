import React, {useState, useEffect} from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, FlatList,Image } from 'react-native'
import Encabezado from './Encabezado'
import VentanaChat from './VentanaChat'
import axios from 'axios';
const Principal = ({setMostrarchat}) => {
    const [salas,setSalas]= useState([])
    const persona='1001'

    useEffect(()=>{
        const pre=async()=>{
          const url="http://192.168.0.17/inicio/listsalas?idpersona="+persona
          const respuesta =await axios.get(url)
              const resultado = await respuesta.data
              setSalas(resultado)
        }
       pre();
      },[])

  return (
    <View style={style.mar}>
        <Encabezado/> 
    {/* Contenedor del chat */}
    <View style={style.mar}>
    <View style={style.mar1}>
  
    <FlatList
    data={salas}
    keyExtractor={item=> item.id_sala}
    renderItem={({item})=>{
        return(
            <VentanaChat
            item={item}
            persona={persona}
            setMostrarchat={setMostrarchat}
            ></VentanaChat>
        )
    }}

    ></FlatList>
       
    </View>
    </View>

    {/* Botones en la parte inferior */}
    <View style={style.menu}>
        <Pressable style={style.btmenu}>
            <Text style={style.txbt}>Contactos</Text>
        </Pressable>
        <Pressable>
            <Text style={style.txbt}>Chats</Text>
        </Pressable>
        <Pressable>
            <Text style={style.txbt}>Llamadas</Text>
        </Pressable>
    
    </View>
  </View>
  )
}
const style=StyleSheet.create({
    cont:{
        height:60,
        backgroundColor:'red',
        marginVertical:12
    },
menu:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center' ,
    backgroundColor: '#437d81'
},
mar:{
    flex:1
},
mar1:{
    flex:1,
    backgroundColor:'#3b3b3b',
},
btmenu:{
   paddingVertical:20
},
txbt:{
    fontSize:15,
color:'white'
},



})

export default Principal