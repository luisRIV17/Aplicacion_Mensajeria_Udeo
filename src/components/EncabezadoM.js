import React,{useState} from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, Image } from 'react-native'
import OpcionesModal from './OpcionesModal'

const EncabezadoM = ({titulo,setValida}) => {
    const [modOpciones, setModOpciones]= useState(false)
  return (
    <View style={style.enca}>
    <View style={style.enca}>
    <Image source={ require('../styles/img/2.png')} style={style.imge}></Image>
<Text style={style.titulo}>{titulo}</Text>
</View>
<Pressable style={style.btmenu}
onPress={()=>setModOpciones(true)}>
        <Text style={style.txbt}>Opciones</Text>
    </Pressable>
    <OpcionesModal
modOpciones={modOpciones}
setModOpciones={setModOpciones}
setValida={setValida}
></OpcionesModal>
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
    padding:10,
    borderRadius:15
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