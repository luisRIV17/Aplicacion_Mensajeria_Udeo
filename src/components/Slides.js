import React from 'react';
import { View, Text } from 'react-native';
import Carousel from './Carousel';


const Slide1 = () => (
  <View style={{ flex: 1, backgroundColor: 'red' }}>
    <Text>Slide 1</Text>
  </View>
);

const Slide2 = () => (
  <View style={{ flex: 1, backgroundColor: 'blue' }}>
    <Text>Slide 2</Text>
  </View>
);

const Slide3 = () => (
  <View style={{ flex: 1, backgroundColor: 'green' }}>
    <Text style={{ backgroundColor: 'green' }}>Slide 3</Text>
  </View>
);

const Misslides = () => {
  const slides = [Slide1(), Slide2(), Slide3()]; // Debes pasar los componentes sin invocarlos con ()

  return (
    <View style={{ flex: 1 }}>
      <Carousel slides={slides} />
      
    </View>
  );
};

export default Misslides;
