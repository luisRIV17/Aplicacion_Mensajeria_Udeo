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

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.mar} >
    <MainStack/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  mar:{flex:1}
});

export default App;
