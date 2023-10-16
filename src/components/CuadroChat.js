import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const CuadroChat = ({item,mensajees,idintengrant}) => {
  const {idmen,idintegrante,nombrepersona,mensaje,
    fecha,hora,estadoquienleyo,estadolecturamen,
    estadomensaje}=item;
   
  return (
    <View style={idintengrant===item.idintegrante?styles.message2:styles.message}>
               {/* <Text style={styles.senderName}>{idintengrant===item.idintegrante?'Yo':item.nombrepersona }</Text>*/} 
                <Text  style={styles.senderName2}>{item.mensaje}</Text>
                <Text  style={styles.hora}>{item.hora}</Text>
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
        color: 'white',
            fontWeight:'200' ,
            fontSize:12,
            textAlign: 'right'
      },
      
      senderName: {
        fontWeight: 'bold',
        color:'white'
      },
      senderName2: {
       
        color:'white'
      },
})
export default CuadroChat