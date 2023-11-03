import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, TextInput, Image, Modal } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPhone, faPhoneVolume, faCircleInfo} from '@fortawesome/free-solid-svg-icons';
import EncabezadoM from './EncabezadoM';


const contactsData = [
    { id: '1', name: 'Contacto 1', phoneNumber: '+502 0000-0000' },
    { id: '2', name: 'Contacto 2', phoneNumber: '+502 0000-0000' },
    { id: '3', name: 'Contacto 3', phoneNumber: '+502 0000-0000' },
    { id: '4', name: 'Contacto 4', phoneNumber: '+502 0000-0000' },
    { id: '5', name: 'Contacto 5', phoneNumber: '+502 0000-0000' },
    { id: '6', name: 'Contacto 6', phoneNumber: '+502 0000-0000' },
    { id: '7', name: 'Contacto 7', phoneNumber: '+502 0000-0000' },
    { id: '8', name: 'Contacto 8', phoneNumber: '+502 0000-0000' },
    { id: '9', name: 'Contacto 9', phoneNumber: '+502 0000-0000' },
    { id: '10', name: 'Contacto 10', phoneNumber: '+502 0000-0000' },
    { id: '11', name: 'Contacto 11', phoneNumber: '+502 0000-0000' },
    { id: '12', name: 'Contacto 12', phoneNumber: '+502 0000-0000' },
    { id: '13', name: 'Contacto 13', phoneNumber: '+502 0000-0000' },
    { id: '14', name: 'Contacto 14', phoneNumber: '+502 0000-0000' },
];
const titulo="Llamadas"
const LlamadaScreen = ({ navigation }) => {
  const [selectedContacts, setSelectedContacts] = useState([]);

  return (
    <View style={styles.container}>
      <EncabezadoM titulo={titulo}/>
      <FlatList
  data={contactsData}
  keyExtractor={(item) => item.id}
  renderItem={({ item }) => (
    <View style={styles.contactItem}>
      <View style={styles.avatarContainer}></View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
      </View>
      <View style={styles.iconContainer}>
        <FontAwesomeIcon icon={faPhoneVolume} style={styles.phoneIcon} />
        <FontAwesomeIcon icon={faCircleInfo} style={styles.phoneIcon} />
      </View>
    </View>
  )}
  contentContainerStyle={{ paddingBottom: 100 }}
  style={{ flex: 1 }}
/>
          </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#3b3b3b',
  },
  iconContainer: {
    flexDirection: 'row',  
    alignItems: 'center',
    marginStart: 150,   
  },
  phoneIcon: {
    fontSize: 20,
    color: 'white',
    marginEnd: 10,  
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
  avatarContainer: {
    width: 50,
    height: 50,
    backgroundColor: '#e0e0e0',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
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
  imge: {
    width: 35,
    height: 35,
    marginRight: 10,
  },
});

export default LlamadaScreen;
