import React from 'react'
import { ScrollView, View,Button, StyleSheet, Text, Pressable, FlatList, Image, TouchableOpacity } from 'react-native'
const chats = [
    {
      id: 1,
      profileImage: require('./Imagenes/1.png'),
      username: 'Usuario 1',
      lastMessage: 'Hola, ¿cómo estás?',
      lastMessageTime: '11:30 AM',
    },
    {
      id: 2,
      profileImage: require('./Imagenes/1.png'),
      username: 'Usuario 2',
      lastMessage: '¡Todo bien! ¿Y tú?',
      lastMessageTime: '11:35 AM',
    },
    // Agrega más objetos de chat según tus necesidades
  ];
const VentanaChat = () => {
    
  return (
    <View>
    {chats.map((chat) => (
        <TouchableOpacity key={chat.id} style={style.contchat} >
                <Image source={chat.profileImage} style={style.imge} />
                <View style={style.cuerpo}>
                  <Text style={style.usu}>{chat.username}</Text>
                  <Text style={style.mensaje}>{chat.lastMessage}</Text>
                </View>
                <Text style={style.hora}>{chat.lastMessageTime}</Text>
              </TouchableOpacity>
        ))}
</View>
  )
}
const style=StyleSheet.create({
    cont:{
        height:60,
        backgroundColor:'red',
        marginVertical:12
    },
    contchat: {
        backgroundColor:'#3b3b3b',
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#66c5cb',
      },
      imge: {
        width: 50,
        height: 50,
        backgroundColor:"#66c5cb",
        borderRadius: 25,
      },
      cuerpo: {
        flex: 1,
        marginLeft: 10,
      },
      usu: {
        fontSize: 16,
        fontWeight: 'bold',
        color:'#66c5cb'
      },
      mensaje: {
        fontSize: 14,
        color: 'white',
      },
      hora: {
        fontSize: 12,
        color: 'white',
      },
})
export default VentanaChat