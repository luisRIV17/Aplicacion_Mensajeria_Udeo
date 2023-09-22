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
import { useState } from 'react';
import Landing from './src/components/Landing'
import {mst} from './src/styles/mst'


function App(): JSX.Element {
  const [modLandin, setModLandin] = useState(false)

  return (
    <SafeAreaView >
    <ImageBackground
        source={require('./src/styles/img/back.jpg')}
        style={mst.Back}
    >
    </ImageBackground>
    <View style={mst.myContainer}>
        <Image style={mst.logo}
        source={require('./src/styles/img/logo.jpg')}
        />
        <Text style={mst.title}>
          Chat Wave
        </Text>
       <View style={mst.btnContainer}>
       <TouchableOpacity
         style={mst.btn}
         onPress={()=>setModLandin(true)}
        >
          <Text>Ingresar</Text>
        </TouchableOpacity>
        <TouchableOpacity
         style={mst.btn}
        >
          <Text>Registrarse</Text>
        </TouchableOpacity>
       </View>
    </View>
    <Modal
    visible={modLandin}>
      <Landing
        modLandin={modLandin}
        setModLandin={setModLandin}
      >

      </Landing>
    </Modal>
   </SafeAreaView>
  );
}

export default App;
