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
import Inicio from './src/components/Inicio';


function App(): JSX.Element {

  return (
    <SafeAreaView >
      <Inicio/>
   </SafeAreaView>
  );
}

export default App;
