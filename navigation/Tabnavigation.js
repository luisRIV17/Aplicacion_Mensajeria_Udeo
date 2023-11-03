import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCommentDots, faPhone, faAddressBook } from '@fortawesome/free-solid-svg-icons';
import MainStack from './MainStack';

import ContactScreen from '../src/components/ContactScreen.js';

import LlamadasScreen from '../src/components/LlamadaScreen.js';
import { link } from '../navigation/globals';
const Tab = createBottomTabNavigator();


const screenOptions = {
  tabBarLabelStyle: { fontSize: 14 },
  tabBarStyle: { height: 70,
    backgroundColor: '#252525',
    borderBlockColor: '#458488',
    borderTopWidth: 2 },
  headerStyle: {
    
  },
  tabBarActiveTintColor: '#66C5CB',
};
const Tabnavigation = ({codper,setValida}) => {
 
  const enlace=link
  console.log(codper)
    return (
      <NavigationContainer>
          <Tab.Navigator
            screenOptions={screenOptions}
            initialRouteName="Chats"
          >
            <Tab.Screen
              name="Contactos"
              component={ContactScreen }
              initialParams={{codper:codper,enlace:enlace}}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faAddressBook} color={color} size={28} />
                ),
                headerShown: false, 
              }}
            />
            <Tab.Screen
              name="Chats"
              component={() => <MainStack codper={codper}  enlace={enlace} setValida={setValida}/>}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faCommentDots} color={color} size={28} />
                ),
                headerShown: false, 
              }}
            />
            <Tab.Screen
              name="Llamadas"
              component={LlamadasScreen}
              options={{
                tabBarIcon: ({ color, size }) => (
                  <FontAwesomeIcon icon={faPhone} color={color} size={28} />
                ),
                headerShown: false, 
              }}
            />
          </Tab.Navigator>
      </NavigationContainer>
    );
  };
  
export default Tabnavigation