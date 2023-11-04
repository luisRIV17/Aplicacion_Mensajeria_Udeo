import React from 'react'
import {Modal, Text, View, TouchableOpacity, TouchableWithoutFeedback, Alert} from 'react-native'
import { mst } from '../styles/mst'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { useNavigation } from '@react-navigation/native'
const OpcionesModal = ({modOpciones, setModOpciones,setValida}) => {
     const navigation = useNavigation()
    const tokenRemover = async () => {
        try {
          await AsyncStorage.removeItem('token');
          console.log('Token eliminado con éxito');
        } catch (error) {
          console.error('Error al eliminar el token:', error);
        }
      }
      const showConfirmation = () => {
  Alert.alert(
    'Confirmación',
    '¿Estás seguro de que deseas salir?',
    [
      {
        text: 'Cancelar',
        onPress: () => console.log('Cancelado'),
        style: 'cancel',
      },
      {
        text: 'Aceptar',
        onPress: async () => {
          try {
            await AsyncStorage.removeItem('token');
            console.log('Token eliminado con éxito');
            setValida(false)
          } catch (error) {
            console.error('Error al eliminar el token:', error);
          }
        },
      },
    ],
    { cancelable: false }
  );
}

// Llama a showConfirmation() cuando desees mostrar el mensaje de confirmación.

      
  return (
    <Modal visible={modOpciones} transparent={true} animationType="none">
      <View style={mst.modContainer}>
        <TouchableOpacity
        style={mst.feedback}
        onPress={()=>setModOpciones(false)}>
        <View style={mst.mod}>
            <TouchableOpacity
             onPress={()=>navigation.navigate('perfil')}
            style={mst.optionsBtn}>
                <Text> Mi Perfil</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=>showConfirmation()}
            style={mst.optionsBtn}>
                <Text>Cerrar Sesión</Text>
                
            </TouchableOpacity>
        </View>
        </TouchableOpacity>
      
      </View>
    </Modal>
  )
}

export default OpcionesModal