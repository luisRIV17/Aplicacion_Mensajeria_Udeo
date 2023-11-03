import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import PrincipalM from '../src/components/PrincipalM'
import ChatM from '../src/components/ChatM'
import InicioProviciona from '../src/components/InicioProviciona'
import contactos from '../src/components/contactos'
import Nuevocontact from '../src/components/Nuevocontact'
import SplashScreen from '../src/components/SplashScreen'

const Stack=createNativeStackNavigator()

const MainStack = ({codper,enlace}) => {
  return (
   
        <Stack.Navigator
            screenOptions={{headerShown:false}}
            initialRouteName="Principal"
        >
           
            <Stack.Screen
                name='Principal'
                component={PrincipalM}
               initialParams={{codper:codper,enlace:enlace}}
            />
            <Stack.Screen
                name='contactos'
                component={contactos}
            />
            <Stack.Screen
                name='chat'
                component={ChatM}
            />
             
            <Stack.Screen
                name='nuevocontacto'
                component={Nuevocontact}
            />  
        </Stack.Navigator>
  
  )
}

export default MainStack