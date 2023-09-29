import React, { useState } from 'react';
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

import Prinipal from './src/Principal';
import Chat from './src/Chat';
function App(): JSX.Element {
const [mostrarchat,setMostrarchat] = useState(false);
console.log(mostrarchat)
  return (
    <SafeAreaView style={styles.mar} >
     {/* <Text>App Chat Wave </Text> */}
    <Prinipal setMostrarchat={setMostrarchat}></Prinipal>

    <Modal visible={mostrarchat}>
    <Chat></Chat>
    </Modal>
    </SafeAreaView>
    
  );
}

const styles = StyleSheet.create({
  mar:{flex:1}
});

export default App;
