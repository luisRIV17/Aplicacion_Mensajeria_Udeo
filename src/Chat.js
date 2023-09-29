import React,{useState,useEffect} from 'react'
import { View, FlatList, TextInput, TouchableOpacity, Text,StyleSheet } from 'react-native';
import { GiftedChat } from 'react-native-gifted-chat';
import ImagePicker from 'react-native-image-picker';
import AudioRecord from 'react-native-audio-record';
import { NativeEventEmitter, NativeModules } from 'react-native';

const Chat = () => {
    
      return (
        <View style={styles.container}>
          {/* Area de mensajes */}
          <View style={styles.messageContainer}>
            {/* Mensajes */}
            <View style={styles.message}>
              <Text style={styles.messageText}>Mensaje 1</Text>
            </View>
            <View style={styles.message}>
              <Text style={styles.messageText}>Mensaje 2</Text>
            </View>
            {/* Puedes agregar más mensajes aquí */}
          </View>
    
          {/* Área de entrada de texto */}
          <View style={styles.inputContainer}>
            <TextInput
              placeholder="Escribe un mensaje..."
              style={styles.textInput}
            />
            <TouchableOpacity style={styles.attachButton}>
              <Text style={styles.buttonText}>Adjuntar Imagen</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.recordButton}>
              <Text style={styles.buttonText}>Grabar Audio</Text>
            </TouchableOpacity>
          </View>
        </View>
      );
    };
    
    const styles = StyleSheet.create({
      container: {
        flex: 1,
        backgroundColor: '#f2f2f2',
        paddingHorizontal: 16,
        paddingVertical: 12,
      },
      messageContainer: {
        flex: 1,
        justifyContent: 'flex-end',
      },
      message: {
        backgroundColor: '#007aff',
        borderRadius: 8,
        padding: 8,
        marginBottom: 8,
        alignSelf: 'flex-start',
      },
      messageText: {
        color: 'white',
      },
      inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        borderTopWidth: 1,
        borderColor: '#ccc',
        paddingTop: 8,
      },
      textInput: {
        flex: 1,
        backgroundColor: 'white',
        borderRadius: 8,
        paddingHorizontal: 12,
        paddingVertical: 8,
        marginRight: 8,
      },
      attachButton: {
        backgroundColor: '#007aff',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },
      recordButton: {
        backgroundColor: '#ff3b30',
        borderRadius: 8,
        paddingVertical: 8,
        paddingHorizontal: 12,
      },
      buttonText: {
        color: 'white',
        fontWeight: 'bold',
      },
    });

export default Chat