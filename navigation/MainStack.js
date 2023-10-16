import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'
import PrincipalM from '../src/components/PrincipalM'
import ChatM from '../src/components/ChatM'
import InicioProviciona from '../src/components/InicioProviciona'

const Stack=createNativeStackNavigator()

const MainStack = () => {
  return (
   <NavigationContainer>
        <Stack.Navigator
            screenOptions={{headerShown:false}}
            initialRouteName="PrincipalM"
        >
             <Stack.Screen
                name='inicio'
                component={InicioProviciona}
            />
            <Stack.Screen
                name='Principal'
                component={PrincipalM}
            />
            <Stack.Screen
                name='chat'
                component={ChatM}
            />
        </Stack.Navigator>
   </NavigationContainer>
  )
}

export default MainStack