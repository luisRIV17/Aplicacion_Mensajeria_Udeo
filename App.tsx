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
LogBox.ignoreAllLogs();
function App(): JSX.Element {
  const [codPersona, setCodPersona] = useState('1002');
  return (
    
    <SafeAreaView style={styles.mar} >
    <MainStack codPersona = {codPersona}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mar:{flex:1}
});

export default App;
