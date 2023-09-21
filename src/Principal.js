import React from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, FlatList,Image } from 'react-native'
import Encabezado from './Encabezado'
import VentanaChat from './VentanaChat'
const Principal = () => {
    
  return (
    <View style={style.mar}>
        <Encabezado/> 
    {/* Contenedor del chat */}
    <View style={style.mar}>
    <ScrollView style={style.mar1}>
  
    <VentanaChat></VentanaChat>
    <VentanaChat></VentanaChat>
    <VentanaChat></VentanaChat>
    <VentanaChat></VentanaChat>
    <VentanaChat></VentanaChat>
    <VentanaChat></VentanaChat>
    <VentanaChat></VentanaChat>
    <VentanaChat></VentanaChat>
       
    </ScrollView>
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