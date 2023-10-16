import React, {useState, useEffect} from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, FlatList,Image } from 'react-native'

import EncabezadoM from './EncabezadoM'
import VentanaChatM from './VentanaChatM'
import axios from 'axios'


const PrincipalM = ({navigation,route}) => {
   

    const {codper}=route.params
    const [salas,setSalas]= useState([])
    const persona=codper
  
    useEffect(()=>{
        const pre=async()=>{
          const url="http://192.168.0.25/inicio/listsalas?idpersona="+persona
          const respuesta =await axios.get(url)
              const resultado = await respuesta.data
              setSalas(resultado)
        }
       pre();
      },[])

  return (
    <View style={style.mar}>
       <EncabezadoM/> 
    {/* Contenedor del chat */}
    <View style={style.mar}>
    <View style={style.mar1}>
  
     <FlatList
    data={salas}
    keyExtractor={item=> item.id_sala}
    renderItem={({item})=>{
        return(
           <VentanaChatM
            item={item}
            persona={persona}
            navigation={navigation}
            ></VentanaChatM>
        )
    }}

    ></FlatList>
       
    </View>
    </View>

    {/* Botones en la parte inferior */}
    <View style={style.menu}>
        <Pressable style={style.btmenu} >
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

export default PrincipalM