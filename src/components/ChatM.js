import React,{useState,useEffect,useRef }  from 'react'
import { View, FlatList, TextInput, TouchableOpacity,Image, Text,StyleSheet,ScrollView } from 'react-native';
import CuadroChat from './CuadroChat';
import axios from 'axios';
const ChatM = ({navigation, route}) => {
  const [id_mensaje,setIdmensaje] = useState('') 
  const [mensaje, setMensaje]=useState('')
    const [archivo, setarchivo]=useState('')
    const [imagen, setimagen]=useState('')
    const [audio, setaudio]=useState('')
    const [tiposala, settiposala]=useState(0)
    const [mensajees,setMensajees]=useState([])
 
  
    const{item} =route.params
    const{nombre} =route.params

    const [inputText, setInputText] = useState('');
    const scrollViewRef = useRef(null);
    const {id_sala,idintengrante}=item;
    const [datas,setDatas]=useState([])
    useEffect(()=>{
      console.log(id_sala,idintengrante)
      const pre=async()=>{
        const url="http://192.168.0.25/mensaje/listmen?idsala="+id_sala+"&idintegrante="+idintengrante
        const respuesta =await axios.get(url)
            const resultado = await respuesta.data
            setMensajees(resultado)
          
      }
     pre();
    },[mensajees])
    console.log(mensajees)
   
   
    const enviarmensje=async()=>{
     
      if(mensaje=='')
      {
         
          return
      }
      
    
      const nuevomensaje={
        mensaje1:mensaje,
        archivo:null,
        imagen:null,
        audio:null,
        idIntegrante:idintengrante,
        idSala:id_sala,
        tiposala:1//parametro provicional
      }
      //setMensajees([...mensajees,nuevomensaje]);   
      console.log(nuevomensaje)
       
        const url='http://192.168.0.25/mensaje/insert'
        const respuesta=await axios.post(url,nuevomensaje)
        const resultado =await respuesta.data
      
        setMensaje('') 
  }

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
               style={styles.bsackButton}
               onPress={()=>{navigation.goBack()}}>
                <Text style={styles.backButtonText}>Atrás</Text>
              </TouchableOpacity>
              <Image source={require('../styles/img/1.png')} style={styles.imge} />
              <Text style={styles.headerText}>{nombre}</Text>
            </View>
            <ScrollView contentContainerStyle={styles.chatContainer} 
            inverted
            ref={scrollViewRef}
            onContentSizeChange={() => scrollViewRef.current.scrollToEnd()}>
              {/* Mensajes del chat */}
              
             {/* <View style={styles.message}>
                <Text style={styles.senderName}>Amigo:</Text>
                <Text  style={styles.senderName2}>Hola, ¿cómo estás?</Text>
              </View>
              <View style={styles.message2}>
                <Text style={styles.senderName}>Tú:</Text>
                <Text  style={styles.senderName2}>¡Hola! Estoy bien, gracias.</Text>
        </View>*/}
<FlatList
    data={mensajees}
    keyExtractor={item=> item.idmen}
    renderItem={({item})=>{
        return(
           <CuadroChat
           item={item}
            mensajees={mensajees}
            idintengrant={idintengrante}
            ></CuadroChat>
        )
    }}

    ></FlatList>
             

             
              {/* Agrega más mensajes aquí */}
             
            </ScrollView>
            <View style={styles.inputContainer}>
              <TextInput
                style={styles.inputText}
                placeholder="Escribe un mensaje..."
                value={mensaje}
                onChangeText={setMensaje}
              />
              <TouchableOpacity style={styles.sendButton} onPress={enviarmensje}>
          <Text 
          style={styles.sendButtonText}
         
          >Enviar</Text>
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
    color:'black',

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