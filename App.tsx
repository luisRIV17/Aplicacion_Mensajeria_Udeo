import React, { useState,useEffect } from 'react';
import {
  Modal,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import PrincipalM from './src/components/PrincipalM';
import ChatM from './src/components/ChatM';

import { BackHandler } from 'react-native';
import MainStack from './navigation/MainStack';
import { LogBox } from 'react-native';
import Tabnavigation from './navigation/Tabnavigation';
import InicioProviciona from './src/components/InicioProviciona';
import SplashScreen from './src/components/SplashScreen';
import Inicio from './src/components/Inicio';

LogBox.ignoreAllLogs();
function App(): JSX.Element {
  const [codper, setCodPersona] = useState();
  const [valida, setValida] = useState(false);
  const [validasplash, setvalidasplash] = useState(false);
  return (
    
    <SafeAreaView style={styles.mar} >
      {validasplash===false?(
        <SplashScreen setvalidasplash={setvalidasplash}/>
      ): valida==false?(
      /*<InicioProviciona setValida={setValida} setCodPersona={setCodPersona}/>*/
      <Inicio setValida={setValida} setCodPersona={setCodPersona}/>
      ):(
        console.log("codper",codper),
        <Tabnavigation codper={codper} setValida={setValida}/>
      )}
     
      
    {/*<MainStack codPersona = {codPersona}/>*/}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mar:{flex:1}
});

export default App;
