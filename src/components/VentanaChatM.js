import React,{useState,useEffect} from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'

import axios from 'axios';
const VentanaChatM = ({item,navigation,persona,setEnviar,enviar,enlace}) => {
    const [detalle,setDetalle]= useState([])
  
    const {id_sala,idintengrante}=item;
    
    const pre = async () => {
      const url = "http://" + enlace + "/inicio/listdetamen?idsala=" + item.id_sala + "&idpersona=" + persona;
      const respuesta = await axios.get(url);
      const resultado = await respuesta.data;
    
      setDetalle(resultado);
    };
  
    useEffect(() => {
      const intervalId = setInterval(() => {
        pre(); 
      }, 5000);
  
      return () => {
        clearInterval(intervalId);
      };
    }, []);
    const {nombresala,ultimomensaje,fecha,hora,envia,tipolec,cant}=detalle
   
      return (
        <View>
       
            <TouchableOpacity  style={style.contchat}
             onPress={()=>{ navigation.navigate('chat',{id_sala,idintengrante ,nombre:detalle.nombresala,enlace,setEnviar});}} >
                    <Image source={require('../styles/img/1.png')} style={style.imge} />
                    <View style={style.cuerpo}>
                      <Text style={style.usu}>{detalle.nombresala}</Text>
                      <Text style={style.mensaje}>{
                      detalle.ultimomensaje!=null? detalle.ultimomensaje.length > 20 ? detalle.ultimomensaje.slice(0, 20) + "..." : detalle.ultimomensaje:null
                      }</Text>
                    </View>
                    {tipolec!=4?envia==false?cant!=0?(
                      <Pressable style={{ width: 25,justifyContent: 'center', height: 25,borderRadius:25, marginRight: 15,backgroundColor:'#66c5cb' }}>
                      <Text style={{textAlign:'center',fontSize:12, fontWeight:'bold'}}>{cant}</Text>
                    </Pressable>
                    ):null:null:null}
                    <View>
                      <Text style={ tipolec!=4?envia==false?cant!=0?style.hora2:style.hora:style.hora:style.hora}>{detalle.fecha}</Text>
                      <Text style={ tipolec!=4?envia==false?cant!=0?style.hora2:style.hora:style.hora:style.hora}>{detalle.hora}</Text>
                    </View>
                   
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
            fontWeight:'300'
          },
          hora2: {
            fontSize: 12,
            color: '#66c5cb',
            fontWeight:'900'
          },
    })

export default VentanaChatM