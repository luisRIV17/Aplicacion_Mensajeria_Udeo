import React,{useState,useEffect,useRef }  from 'react'
import { View, FlatList, TextInput, TouchableOpacity,Image, Text,StyleSheet,ScrollView } from 'react-native';

const ChatM = ({setMostrarchat}) => {
    const [inputText, setInputText] = useState('');
    const scrollViewRef = useRef(null);

    const handleSendMessage = () => {
      // Aquí puedes agregar lógica para enviar el mensaje ingresado
      // Por ahora, simplemente imprimiremos el mensaje en la consola
      scrollViewRef.current.scrollToEnd();
    };
  
    useEffect(() => {
        // Desplázate automáticamente hacia abajo al cargar la pantalla
        scrollViewRef.current.scrollToEnd({ animated: false });
      }, []);

        return (
            <View style={styles.container}>
            <View style={styles.header}>
              <TouchableOpacity
               style={styles.backButton}
               onPress={()=>setMostrarchat(false)}>
                <Text style={styles.backButtonText}>Atrás</Text>
              </TouchableOpacity>
              <Image source={require('../styles/img/1.png')} style={styles.imge} />
              <Text style={styles.headerText}>Chat con Amigo</Text>
            </View>
            <ScrollView contentContainerStyle={styles.chatContainer} 
            inverted
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>
              {/* Mensajes del chat */}
              <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Hola! Estoy bien, gracias.</Text>
              </View>
              <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Hola! Estoy bien, gracias.</Text>
              </View>
              <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Hola! Estoy bien, gracias.</Text>
              </View>
              <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Hola! Estoy bien, gracias.</Text>
              </View>
              <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Hola! Estoy bien, gracias.</Text>
              </View>
              <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Holas! Estoy bien, gracias.</Text>
              </View>
              <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Hola! Estoy bien,jijij gracias.</Text>
              </View>
              {/* Agrega más mensajes aquí */}
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Escribe un mensaje..."
                value={inputText}
                onChangeText={(text) => setInputText(text)}
              />
              <TouchableOpacity style={styles.sendButton} onPress={handleSendMessage}>
          <Text style={styles.sendButtonText}>Enviar</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.sendFileButton} >
          <Text style={styles.sendFileButtonText}>Enviar Archivo</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:'#3b3b3b',
  },
  header: {
    backgroundColor:'#252525',
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  backButton: {
    padding: 10,
  },
  backButtonText: {
    color: 'white',
  },
  headerText: {
    fontSize: 20,
    color: 'white',
    marginLeft: 20,
  },
  imge: {
    width: 40,
    height: 40,
    marginLeft:20,
    backgroundColor:"#66c5cb",
    borderRadius: 25,
  },
  chatContainer: {
    flexGrow: 1,
    justifyContent: 'flex-end',
  },
  message: {
    margin: 10,
    padding: 10,
    width:'65%',
    backgroundColor: '#141414',
    borderRadius: 10,
    maxWidth: '80%',
   
  },
  message2: {
    margin: 10,
    padding: 10,
    width:'65%',
    backgroundColor: '#41777b',
    borderRadius: 10,
    maxWidth: '80%',
    alignSelf: 'flex-end',
  },
  
  senderName: {
    fontWeight: 'bold',
    color:'white'
  },
  senderName2: {
   
    color:'white'
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    backgroundColor: '#3b3b3b',
    borderTopColor:'#427b7e',
    borderTopWidth:2
  },
  inputText: {
    flex: 1,
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 20,
    color:'white',

  },
  sendButton: {
    backgroundColor: '#42797c',
    padding: 15,
    paddingHorizontal:20,
    borderRadius: 20,
    marginLeft: 10,
  },
  sendButtonText: {
    color: 'white',
  },
  sendFileButton: {
    padding: 10,
    borderRadius: 10,
    marginLeft: 10,
  },
  sendFileButtonText: {
    color: '#25d366',
  },
});
                

export default ChatM