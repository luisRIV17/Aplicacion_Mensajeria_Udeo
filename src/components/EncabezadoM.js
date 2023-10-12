import React from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, Image } from 'react-native'

const EncabezadoM = () => {
  return (
    <View style={style.enca}>
    <View style={style.enca}>
    <Image source={ require('../styles/img/2.png')} style={style.imge}></Image>
<Text style={style.titulo}>Chats</Text>
</View>
<Pressable style={style.btmenu}>
        <Text style={style.txbt}>Opciones</Text>
    </Pressable>
</View>
)
}
const style=StyleSheet.create({
enca:{
    flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center', 
     padding: 10,
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
})

export default EncabezadoM