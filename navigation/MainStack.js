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

const MainStack = ({codPersona}) => {
  return (
   <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown:false}}
            initialRouteName="primera"
        >
            <Stack.Screen
                name='primera'
                component={SplashScreen}

            />
             <Stack.Screen
                name='inicio'
                component={InicioProviciona}

            />
            <Stack.Screen
                name='Principal'
                component={PrincipalM}
               
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
   </NavigationContainer>
  )
}

export default MainStack