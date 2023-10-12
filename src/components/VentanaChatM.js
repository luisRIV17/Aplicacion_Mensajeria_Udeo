import React,{useState,useEffect} from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'

import axios from 'axios';
const VentanaChatM = ({item,persona,setMostrarchat,navigation}) => {
    const [detalle,setDetalle]= useState([])
    const {id_sala}=item;
    
      useEffect(()=>{
          const pre=async()=>{
            const url="http://172.16.1.144/inicio/listdetamen?idsala="+item.id_sala+"&idpersona="+persona
            const respuesta =await axios.get(url)
                const resultado = await respuesta.data
                setDetalle(resultado)
          }
         pre();
        },[])
    const {nombresala,ultimomensaje,fecha,hora,envia}=detalle
      return (
        <View>
       
            <TouchableOpacity  style={style.contchat}
             onPress={()=>{navigation.navigate('chat')}} >
                    <Image source={require('../styles/img/1.png')} style={style.imge} />
                    <View style={style.cuerpo}>
                      <Text style={style.usu}>{detalle.nombresala}</Text>
                      <Text style={style.mensaje}>{detalle.ultimomensaje}</Text>
                    </View>
                    <Text style={style.hora}>{detalle.fecha}</Text>
                    <Text style={style.hora}>{detalle.hora}</Text>
                  </TouchableOpacity>
          
    </View>
      )
    }
    const style=StyleSheet.create({
        cont:{
            height:60,
            backgroundColor:'red',
            marginVertical:12
        },
        contchat: {
            backgroundColor:'#3b3b3b',
            flexDirection: 'row',
            alignItems: 'center',
            padding: 10,
            borderBottomWidth: 1,
            borderBottomColor: '#66c5cb',
          },
          imge: {
            width: 50,
            height: 50,
            backgroundColor:"#66c5cb",
            borderRadius: 25,
          },
          cuerpo: {
            flex: 1,
            marginLeft: 10,
          },
          usu: {
            fontSize: 16,
            fontWeight: 'bold',
            color:'#66c5cb'
          },
          mensaje: {
            fontSize: 14,
            color: 'white',
            fontWeight:'200'
          },
          hora: {
            fontSize: 12,
            color: 'white',
            fontWeight:'200'
          },
    })

export default VentanaChatM