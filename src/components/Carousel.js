import React, { useState, useEffect } from 'react';
import { StyleSheet } from 'react-native';
import { View, Text, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Mycolors } from '../styles/color';
import ChatM from './ChatM';
import PrincipalM from './PrincipalM';

const Carousel = ({  navigation }) => {
  const slides=[]
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenWidth = Dimensions.get('window').width;

  const handleScroll = (event) => {
    const contentOffsetX = event.nativeEvent.contentOffset.x;
    const index = Math.floor(contentOffsetX / screenWidth);
    setCurrentIndex(index);
  };
  slides.push(<PrincipalM key="Principal" navigation={navigation} />);
  slides.push(<ChatM key="contactos" navigation={navigation}/>)
  const goToSlide = (index) => {
    // Asegúrate de que el índice esté dentro de los límites del arreglo slides
    if (index >= 0 && index < slides.length) {
      // Calcula la posición de desplazamiento según el índice
      const scrollPosition = index * screenWidth;
      // Actualiza currentIndex y desplaza el ScrollView
      setCurrentIndex(index);
      scrollViewRef.current.scrollTo({ x: scrollPosition, animated: true });
    }
  };

  const scrollViewRef = React.createRef();

  return (
    <View style={styles.container}>
      <ScrollView
        ref={scrollViewRef}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        {slides.map((slide, index) => (
          <View key={index} style={styles.slide}>
            {slide}
          </View>
        ))}
      </ScrollView>
      <View style={styles.indicatorContainer}>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => goToSlide(0)} // Cambiar al Slide 0 cuando se presione el botón
        >
          <Text>CHATS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => goToSlide(1)} // Cambiar al Slide 0 cuando se presione el botón
        >
          <Text>LLAMADAS</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => goToSlide(2)} // Cambiar al Slide 0 cuando se presione el botón
        >
          <Text>CONTACTOS</Text>
        </TouchableOpacity>
       
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  slide: {
    width: Dimensions.get('window').width,
    height: 200, // Ajusta la altura según tus necesidades
  },
  indicatorContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    backgroundColor:Mycolors.dark
  },
  indicator: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: 'blue', // Cambia el color del indicador
    margin: 5,
  },
  btn:{
    width:120,
        height:65,
        backgroundColor:Mycolors.high,
        borderRadius:5,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:Mycolors.dark,
        marginBottom:9,
        margin:1
  

  }
});

export default Carousel;
