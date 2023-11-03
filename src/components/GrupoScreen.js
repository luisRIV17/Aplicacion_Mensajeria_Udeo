import React, { useState } from 'react';
import { View, Text, TextInput, Button, FlatList, TouchableOpacity, StyleSheet, Alert } from 'react-native';

const GroupScreen = ({ selectedContacts, navigation }) => {
  const [groupName, setGroupName] = useState('');

  const createGroup = () => {
    if (!groupName) {
      Alert.alert('Error', 'Ingresar nombre para el grupo');
      return;
    }
    if (selectedContacts.length === 0) {
      Alert.alert('Error', 'Seleccionar al menos un contacto');
      return;
    }
    // Crear el grupo aquí
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.contactItem}>
      <View style={styles.avatarContainer}></View>
      <View style={styles.contactInfo}>
        <Text style={styles.contactName}>{item.name}</Text>
        <Text style={styles.phoneNumber}>{item.phoneNumber}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.searchInput}
        placeholder="Nombre del grupo"
        value={groupName}
        onChangeText={setGroupName}
        placeholderTextColor="#FFFFFF"
      />
      <Text style={styles.participantsText}>{`${selectedContacts.length} Participantes`}</Text>
      <FlatList
        data={selectedContacts}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
      />
      <TouchableOpacity
        style={styles.createGroupButton}
        onPress={ ()=> navigation.navigate('Chats')}
      >
        <Text style={styles.createGroupButtonText}>Crear Grupo</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#252525',
    padding: 16,
  },
  participantsText: {
    color: 'white',
    fontSize: 13,
    alignSelf: 'center',
    marginVertical: 10,
  },
  groupNameInput: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    marginVertical: 10,
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
  searchInput: {
    paddingHorizontal: 16,
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderRadius: 25,
    color: '#FFFFFF',
    backgroundColor: '#141414',
    alignSelf: 'center',
    width: '80%',
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
});

export default GroupScreen;
