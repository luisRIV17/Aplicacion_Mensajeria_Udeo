import React,{useState,useEffect} from 'react'
import { View, Text, FlatList,Image,TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native'
import axios from 'axios'

const FichaContac = ({item,enlace,setEnviar,persona,navigation}) => {
    const {nombrecontacto,leyenda,idpersona}=item
    const [nombresala,setNombresala]=useState('')
    const crearoredirigirsala=async()=>{
       const datossalas={ 
            idpersonacreo: persona.toString(),
            estadoChat: true,
            idTipoSala: 1,
            nombreSala: nombresala,
            idpersonaconta:idpersona.toString() 
          }
          console.log(datossalas)
        const url="http://"+enlace+"/inicio/insertsala"
        const respuesta=await axios.post(url,datossalas)
        const item =await respuesta.data
        const {id_sala,idintengrante}=item
      navigation.navigate('chat',{id_sala,idintengrante ,nombre:nombrecontacto,enlace,setEnviar});
    }
  return (
    <TouchableOpacity style={styles.contactoItem} onPress={crearoredirigirsala}>
    <View style={styles.cuerpo}>
      <Image source={require('../styles/img/1.png')} style={styles.imge}></Image>
       <View>
       <Text style={styles.contactoNombre}>{nombrecontacto}</Text>
       <Text style={styles.contactoInfo}>{leyenda}</Text>
        </View>
      
    </View>
  
  </TouchableOpacity>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#F5F5F5',
    },
    imge: {
      width: 50,
      height: 50,
      backgroundColor:"#66c5cb",
      borderRadius: 25,
      marginRight:10
    },
    cuerpo: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 5,
    },
    headerContainer: {
      backgroundColor: '#252525',
      padding: 20,
      borderBottomWidth: 1,
      borderBottomColor: '#0056b3',
    },
    header: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'white',
    },
    contactoItem: {
      padding: 16,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
      backgroundColor: 'white',
    },
    contactoNombre: {
      fontSize: 18,
      color: '#333',
      fontWeight: 'bold',
    },
  });
  
export default FichaContac