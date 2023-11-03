import React, { useState } from 'react'
import { StyleSheet, Text, TextInput, View,Pressable } from 'react-native'

const InicioProviciona = ({setValida,setCodPersona}) => {
    const [codpersona,setCodpersona]= useState('')
   
  return (
    <View>
        <View styles={styles.conte}>
            <Text>Ingreso de codigo persona</Text>
            <TextInput
           value={codpersona}
            onChangeText={setCodpersona}
            placeholder='codigo'
            keyboardType='numeric'
            ></TextInput>

        </View>
       <Pressable
        style={styles.botonagregar} 
        onPress={()=>{setValida(true),setCodPersona(codpersona)}}
        >
        <Text  styles={styles.textagregar}>Ingresar</Text>
        </Pressable>
    </View>
  )
}
const styles=StyleSheet.create({
    conte:{
        marginHorizontal:15,
        borderRadius:10,
        paddingHorizontal:30,
        paddingVertical:40,
        transform:[{translateY:50}],
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowOpacity: 0.27,
        shadowRadius: 4.65,  
        elevation: 9,
    }
     ,botonagregar:{
        backgroundColor:'#1F9AFF',
        marginVertical:20,
        marginHorizontal:10,
        padding:10,
        borderRadius:10,
    },
    textagregar:{
        textAlign:'center',
        fontWeight:'bold',
        color:'#fff',
        textTransform:'uppercase'
    },
    input:{
        backgroundColor:'#f5f5f5',
        borderRadius:10,
        padding:10,
        marginTop:10
    }
})

export default InicioProviciona