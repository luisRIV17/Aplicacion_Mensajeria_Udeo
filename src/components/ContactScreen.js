import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Pressable, Image, Modal, Button } from 'react-native';
import GroupScreen from './GrupoScreen'
import EncabezadoM from './EncabezadoM';

const contactsData = [
    { id: '1', name: 'Contacto 1 ', phoneNumber: '+502 0000-0000'},
    { id: '2', name: 'Contacto 2 ', phoneNumber: '+502 0000-0000'},
    { id: '3', name: 'Contacto 3 ', phoneNumber: '+502 0000-0000'},
    { id: '4', name: 'Contacto 4 ', phoneNumber: '+502 0000-0000'},
    { id: '5', name: 'Contacto 5 ', phoneNumber: '+502 0000-0000'},
    { id: '6', name: 'Contacto 6 ', phoneNumber: '+502 0000-0000'},
    { id: '7', name: 'Contacto 7 ', phoneNumber: '+502 0000-0000'},
    { id: '8', name: 'Contacto 8 ', phoneNumber: '+502 0000-0000'},
    { id: '9', name: 'Contacto 9 ', phoneNumber: '+502 0000-0000' },
    { id: '10', name: 'Contacto 10 ', phoneNumber: '+502 0000-0000'},
    { id: '11', name: 'Contacto 11 ', phoneNumber: '+502 0000-0000'},
    { id: '12', name: 'Contacto 12 ', phoneNumber: '+502 0000-0000'},
    { id: '13', name: 'Contacto 13 ', phoneNumber: '+502 0000-0000'},
    { id: '14', name: 'Contacto 14 ', phoneNumber: '+502 0000-0000'},
];
const ContactScreen = ({ navigation }) => {
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isCreateGroupVisible, setIsCreateGroupVisible] = useState(false);

  const showCreateGroupScreen = () => {
    setIsCreateGroupVisible(true);
  };

  const closeCreateGroupScreen = () => {
    setIsCreateGroupVisible(false);
    setSelectedContacts([]); 
  };

  return (
    <View style={styles.container}>
      <EncabezadoM />
      <FlatList
        data={contactsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate('Chat', { contactName: item.name })}
            onLongPress={() => {
              if (selectedContacts.includes(item)) {
                setSelectedContacts(selectedContacts.filter((contact) => contact !== item));
              } else {
                setSelectedContacts([...selectedContacts, item]);
              }
            }}
            style={[
              styles.contactItem,
              selectedContacts.includes(item) ? styles.selectedContact : null,
            ]}
          >
            <View style={styles.avatarContainer}>
            </View>
            <View style={styles.contactInfo}>
              <Text style={[styles.contactName, selectedContacts.includes(item) ? styles.selectedContactName : null]}>
                {item.name}
              </Text>
              <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
            </View>
          </TouchableOpacity>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
        style={{ flex: 1 }}
      />
        {selectedContacts.length > 0 && (
        <TouchableOpacity
          style={styles.createGroupButton}
          onPress={(showCreateGroupScreen)}
        >
          <Text style={styles.createGroupButtonText}>Nuevo Grupo</Text>
        </TouchableOpacity>
      )}

      <Modal
        animationType="slide" 
        transparent={true}
        visible={isCreateGroupVisible}
        onRequestClose={() => {
          closeCreateGroupScreen();
        }}
      >
         
        <GroupScreen
          selectedContacts={selectedContacts}
          navigation={navigation}
        />
       <TouchableOpacity
          style={styles.createGroupButton1}
          onPress={closeCreateGroupScreen}
        >
          <Text style={styles.createGroupButtonText}>Cerrar</Text>
        </TouchableOpacity>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
  },
  selectedContact: {
    backgroundColor: '#02abbf',
    borderColor: '#66C5CB',
    borderWidth: 2,
  },
  selectedContactName: {
    color: '#FFFFFF',
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
    width: '60%',
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#458488',
  },
  selectedContact: {
    backgroundColor: '#66C5CB',
    borderColor: '#02abbf',
    borderWidth: 2,
  },
  avatarContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
  },
  enca: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#252525',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#458488',
  },
  titulo: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
  },
  createGroupButton1: {
    backgroundColor: '#417478',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    marginBottom:80
  },
  createGroupButton: {
    backgroundColor: '#417478',
    padding: 10,
    borderRadius: 10,
    margin: 10,
    alignItems: 'center',
    
  },
  createGroupButtonText: {
    color: '#FFFFFF',
   
  },
  imge: {
    width: 35,
    height: 35,
    marginRight: 10,
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