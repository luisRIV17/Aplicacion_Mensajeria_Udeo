import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import Principal from './src/components/Principal.js';

const App = () => {
  return (
      <SafeAreaView style={styles.container}>
        <Principal />
      </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
