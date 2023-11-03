import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import ProgressBar from 'react-native-progress/Bar';

const SplashScreen = ({setvalidasplash} ) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      if (progress < 1) {
        setProgress(progress + 0.09); 
      } else {
        clearInterval(timer);
        setvalidasplash(true)

      }
    }, 50);
  
    return () => {
      clearInterval(timer);
    };
  }, [progress]);

  return (
    <View style={styles.container}>
      <Image
        source={require('../resources/fondo.jpg')}
        style={styles.backgroundImage}
      />
      
      <View style={styles.content}>
        <Image source={require('../resources/logo.png')} style={styles.logo} />
        <Image source={require('../resources/Letra.png')} style={styles.logo1} />
        

        <ProgressBar
          progress={progress}
          width={200}
          borderWidth={0} 
          color="#43809F" 
        />
      </View>
      
      <View style={styles.poweredContainer}>
  <Image source={require('../resources/powered.png')} style={styles.poweredLogo} />
  <Image source={require('../resources/udeo.png')} style={styles.poweredLogo1} />
</View>
</View>
  );
};

const styles = StyleSheet.create({
  poweredContainer: {
  position: 'absolute',
  bottom: 10, 
  width: '100%',
  alignItems: 'center',
},
poweredLogo: {
  width: 120, 
  height: 12,
  marginBottom: 5, 
},
poweredLogo1: {
  width: 20, 
  height: 30, 
},

  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  backgroundImage: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  content: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 50,
  },
  logo1: {
    width: 200, 
    height: 40,
    marginBottom: 10,
  },
});

export default SplashScreen;
