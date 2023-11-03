
import React from 'react'
import { StyleSheet, Text,Image, View } from 'react-native'

const CuadroChat = ({item,mensajees,idintengrant,setSeHaRenderizado,seHaRenderizado}) => {
  const {idmen,idintegrante,nombrepersona,mensaje,
    fecha,hora,estadoquienleyo,estadolecturamen,
    estadomensaje,tipogrupo}=item;
    const fechaActual = new Date();
    const opcionesDeFormato = { year: 'numeric', month: 'numeric', day: 'numeric' };
  const fechaFormateada = fechaActual.toLocaleDateString('es-ES', opcionesDeFormato);
    const fecha2 = new Date(fecha);

  return (
    <View style={idintengrant===item.idintegrante?styles.message2:styles.message}>
              {/*
                fechaFormateada===fecha?seHaRenderizado===false?(<Text style={{fontSize:18, color:'white'}}>HOY</Text>,setSeHaRenderizado(true)):null:null
               
  */}
              {tipogrupo===2?item.estadoquienleyo==2?(
                <Text style={styles.senderName}>{idintengrant===item.idintegrante?'Yo':item.nombrepersona }</Text> 
              ):null:null} 
                <Text  style={styles.senderName2}>
                { item.mensaje}
                  </Text>
                <Text  style={styles.hora}>{item.hora}    {
               item.estadoquienleyo==1? item.estadolecturamen==='sin leer'?
              ( <Image style={[styles.imges]} source={require('../styles/img/1m.png')} />):
              item.estadolecturamen==='recibido'?
              ( <Image style={[styles.imges2]} source={require('../styles/img/2m.png')} />):
              item.estadolecturamen==='leido'?
              ( <Image style={[styles.imges3]} source={require('../styles/img/3mn.png')} />):null:null
              } </Text>
  </View>
 
  )
}
const styles=StyleSheet.create({
    message: {
        margin: 10,
        padding: 10,
        
        backgroundColor: '#141414',
        borderRadius: 10,
        maxWidth: '80%',
        maxWidth: '80%',
        alignSelf: 'flex-start', // Align to the left
        flex: 0, 
      },
      message2: {
        margin: 10,
        padding: 10,
        backgroundColor: '#41777b',
        borderRadius: 10,
        maxWidth: '80%',
        alignSelf: 'flex-end', // Align to the right
        flex: 0,
      },
      hora: {
        color:'white',
       
            fontWeight:'300' ,
            fontSize:12,
            textAlign: 'right'
      },
      
      senderName: {
        fontWeight: 'bold',
        color:'#66c5cb'
      },
      senderName2: {
       
        color:'white'
      },
      imges:{
        width: 13,
        height: 13,
      },
      imges2:{
        width: 22,
        height: 22,
      },
      imges3:{
        width: 16,
        height: 16,
      }
})
export default CuadroChat