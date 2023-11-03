import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, FlatList, TouchableOpacity, TextInput, Pressable, Image, Modal, Button } from 'react-native';
import GroupScreen from './GrupoScreen'
import EncabezadoM from './EncabezadoM';
import axios from 'axios'

const ContactScreen = ({ navigation,route }) => {
  const {codper}=route.params
  const {enlace}=route.params
  const persona=codper
  console.log(codper)
  const [selectedContacts, setSelectedContacts] = useState([]);
  const [isCreateGroupVisible, setIsCreateGroupVisible] = useState(false);
  const [contacto,setContacto]= useState([])

  
    const pre=async()=>{
      const url="http://"+enlace+"/contacto/listmen?idpersona="+persona
      
      const respuesta =await axios.get(url)
          const resultado = await respuesta.data
          setContacto(resultado)
          console.log(resultado)
    }
   

  const [valor, setValor] = useState(0);

  useEffect(() => {
    pre(); // Llamar a pre inmediatamente al cargar el componente
    
    const intervalId = setInterval(() => {
       
      pre(); // Llamar a pre a intervalos de tiempo
      
    }, 5000); // Cambiar el valor cada 60000ms (60 segundos)

    // Asegúrate de limpiar el intervalo cuando el componente se desmonte
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const showCreateGroupScreen = () => {
    setIsCreateGroupVisible(true);
  };

  const closeCreateGroupScreen = () => {
    setIsCreateGroupVisible(false);
    setSelectedContacts([]); 
  };
const titulo="Contactos"
  return (
    <View style={styles.container}>
      <EncabezadoM titulo={titulo}/>
      <FlatList
        data={contacto}
        keyExtractor={(item) => item.idpersona}
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
           
            <Image source={require('../styles/img/1.png')} style={styles.avatarContainer} />
            
            <View style={styles.contactInfo}>
              <Text style={[styles.contactName, selectedContacts.includes(item) ? styles.selectedContactName : null]}>
                {item.nombrecontacto}
              </Text>
              <Text style={styles.phoneNumber}>{item.leyenda}</Text>
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
          enlace={enlace}
          persona={persona}
          setSelectedContacts={setSelectedContacts}
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
    backgroundColor: '#3b3b3b',
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
    borderBottomWidth: 2,
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