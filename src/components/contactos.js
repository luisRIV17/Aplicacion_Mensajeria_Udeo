import React,{useState,useEffect} from 'react'
import { View, Text, FlatList,Image,TouchableOpacity, StyleSheet,SafeAreaView } from 'react-native'
import axios from 'axios'
import FichaContac from './FichaContac';

const contactos = ({navigation,route}) => {
  const {persona}=route.params
  const {enlace}=route.params
  const {setEnviar}=route.params
const [nombresala,setNombresala]=useState('')
  const [contacto,setContacto]= useState([])
  useEffect(()=>{
    const pre=async()=>{
      const url="http://"+enlace+"/contacto/listmen?idpersona="+persona
      const respuesta =await axios.get(url)
          const resultado = await respuesta.data
          setContacto(resultado)
    }
   pre();
  },[])
  
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.header}>Seleccione un contacto</Text>
      </View>
      <FlatList
        data={contacto}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <FichaContac item={item}
          enlace={enlace}
          setEnviar={setEnviar}
          persona={persona}
          navigation={navigation}
          />
        )}
      />
    </View>
  );
};

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

export default contactos