import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Pressable,Image } from 'react-native';

const contactsData = [
  { id: '1', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '2', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '3', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '4', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '5', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '6', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '7', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '8', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '9', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '10', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '11', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '12', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '13', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
  { id: '14', name: 'Contacto ', phoneNumber: '+502 0000-0000', avatar: '' },
];

const ContactScreen = ({ navigation }) => {
  const renderItem = ({ item }) => (
    <TouchableOpacity
      onPress={() => navigation.navigate('Chat', { contactName: item.name })}
      style={styles.contactItem}
    >
      <View style={styles.avatarContainer}>
        <Text style={styles.avatarText}>{item.avatar}</Text>
      </View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      
      <View style={styles.enca}>
        
        <Image source={ require('../2.jpg')} style={styles.imge}></Image>
    <Text style={styles.titulo}>Chats</Text>
  
  <TextInput
          style={styles.searchInput}
          placeholder="Buscar..."
          placeholderTextColor="#FFFFFF"
        />
    </View>
      <FlatList
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ flex: 1 }}
      />
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Chats</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Llamadas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Contactos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  topPanel: {
    backgroundColor: '#252525', 
    paddingVertical: 10, 
    borderBottomWidth: 1,
    borderBottomColor: '#458488',
    
  },
  searchInput: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderRadius: 25,
    color: '#FFFFFF',
    backgroundColor: '#141414',
    alignSelf: 'center',
    width: '65%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#458488', 
  },
  avatarContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enca:{
    flexDirection: 'row',
     justifyContent: 'space-between', 
     alignItems: 'center', 
     padding: 10,
     backgroundColor:'#252525', 
    paddingVertical: 10, 
    borderBottomWidth: 1,
    borderBottomColor: '#458488',
},
titulo:{
    fontSize: 20, 
    color:'white',
    fontWeight: 'bold',
   
},
btmenu:{
    backgroundColor:'#02abbf',
    padding:10
 },
 txbt:{
     fontSize:15,
 color:'white'
 },
 imge: {
    width: 35,
    height: 35,
  marginRight:10
    
  },
  avatarText: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  contactInfo: {
    marginLeft: 16,
  },
  contactName: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#66C5CB',
  },
  phoneNumber: {
    fontSize: 14,
    color: '#FFFFFF',
  },
  bottomButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 10,
    borderTopWidth: 1,
    borderTopColor: '#458488',
    backgroundColor: '#252525',
  },
  button: {
    flex: 1,
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#417478',
    borderRadius: 10,
    fontcolor: '#FFFFFF',
    marginHorizontal: 10,
  },
  buttonText: {
    color: '#FFFFFF',
  },
});

export default ContactScreen;
