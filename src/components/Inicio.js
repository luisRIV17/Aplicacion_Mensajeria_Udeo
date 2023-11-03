import React  from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  ImageBackground,
  Image,
  TouchableOpacity,
  Button,
  Modal
} from 'react-native';
import { useState, useEffect} from 'react';
import Landing from './Landing';
import { mst } from '../styles/mst';
import Registro from './Registro';
import AsyncStorage from '@react-native-async-storage/async-storage';
import MainStack from '../../navigation/MainStack';


const Inicio = ({setValida,setCodPersona}) => {
    const [token, setToken]= useState();
    const [modLandin, setModLandin] = useState(false)
    const [modRegistro, setModRegistro ]= useState(false)
    const [tokenValidation, setTokenValidation]= useState(false)
  

    useEffect(() => {
        const checkUserToken = async ()=>{
            try{
                const userToken= await AsyncStorage.getItem('token');
                if(userToken !== null ){
                    console.log(JSON.parse(userToken))
                    setTokenValidation(true);
                    setCodPersona(userToken)
                    setValida(true)
                    
                    
                }else{
                    console.log('token not found')
                    
                  
                }
                 }
                catch(error){
                    console.error(error);
                }
            
        };
    
      checkUserToken();
    }, [])
    

  return (
<SafeAreaView>


   <ImageBackground
          source={require('../styles/img/back2.jpg')}
          style={mst.Back}
      >
      </ImageBackground><View style={mst.myContainer}>
              <Image style={mst.logo}
                  source={require('../styles/img/logo.png')} />
              <Text style={mst.title}>
                  Chat Wave
              </Text>
              <View style={mst.btnContainer}>
                  <TouchableOpacity
                      style={mst.btn}
                      onPress={() => setModLandin(true)}
                  >
                      <Text>Ingresar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                      style={mst.btn}
                      onPress={() => setModRegistro(true)}
                  >
                      <Text>Registrarse</Text>
                  </TouchableOpacity>
            
       
              </View>
          </View><Modal
              visible={modLandin}
              animationType="fade">
                
              <Landing
                  modLandin={modLandin}
                  setModLandin={setModLandin}
                  setValida={setValida}
                  setCodPersona={setCodPersona}
              >
              </Landing>
          </Modal>
          <Modal
          animationType="fade"
          visible={modRegistro}>
            <Registro
            modRegistro={modRegistro}
            setModRegistro={setModRegistro}
            setValida={setValida}
            setCodPersona={setCodPersona}
          />
          
          </Modal>
       

</SafeAreaView>
  )
}

export default Inicio
 