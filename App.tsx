import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import Prinipal from './src/Principal';
function App(): JSX.Element {


  return (
    <SafeAreaView style={styles.mar} >
     {/* <Text>App Chat Wave </Text> */}
     <Prinipal></Prinipal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mar:{flex:1}
});

export default App;
