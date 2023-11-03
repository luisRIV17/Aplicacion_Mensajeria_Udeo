import React, {useState, useEffect} from 'react'
import { ScrollView,Modal, View,Button,TouchableOpacity,  StyleSheet, Text, Pressable, FlatList,Image } from 'react-native'

import EncabezadoM from './EncabezadoM'
import VentanaChatM from './VentanaChatM'
import axios from 'axios'
const ModalPoup=({visible,children})=>{
    
    const [showModal,setShowModal]=useState(false)
   useEffect(()=>{
  
         toggleModal()
         
   },[visible])
   const toggleModal=()=>{
    if(visible==true){
        setShowModal(true)
    }
    else{
        setShowModal(false)
    }
   }
    return(
        <Modal transparent visible={showModal} >
            <View style={style.modalBackgroun}>
                <View style={style.modalContainer}>
                    {children}
                </View>
            </View>
        </Modal>)
}
const titulo="Chats"

const PrincipalM = ({navigation,route}) => {
   
   
    const {codper}=route.params
    const {enlace}=route.params
    const {setValida}=route.params
   
    const [salas,setSalas]= useState([])
    const [enviar,setEnviar]= useState(true)
    const [visible,setVisible]=useState(false)

    const persona=codper
  
   
    
   
        const pre=async()=>{
          const url="http://"+enlace+"/inicio/listsalas?idpersona="+persona
          const respuesta =await axios.get(url)
              const resultado = await respuesta.data
             
              setSalas(resultado)
        }
        const cambioestadoRecibido=async()=>{
            const url="http://"+enlace+"/mensaje/srecibido?idper="+persona
            const respuesta =await axios.put(url)
                const resultado = await respuesta.data
          }
     

      
      
      const [valor, setValor] = useState(0);

      useEffect(() => {
        pre(); // Llamar a pre inmediatamente al cargar el componente
        cambioestadoRecibido();
        const intervalId = setInterval(() => {
            cambioestadoRecibido();
          pre(); // Llamar a pre a intervalos de tiempo
          
        }, 5000); // Cambiar el valor cada 60000ms (60 segundos)
    
        // Asegúrate de limpiar el intervalo cuando el componente se desmonte
        return () => {
          clearInterval(intervalId);
        };
      }, []);
      
  return (
    <View style={style.mar}>
       <EncabezadoM titulo={titulo} setValida={setValida}/> 
       <ModalPoup visible={visible}>
        <View style={{  flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center',}}>
            <Text style={{color:'#252525',fontWeight:'bold', fontSize:20}}>Crear</Text>
            <TouchableOpacity 
            onPress={()=>{setVisible(false)}}
            >
               <Text style={{color:'#3b3b3b',fontWeight:'bold', fontSize:20}}>X</Text>
            </TouchableOpacity>
        </View>
        <View style={style.butonmodal}>
            <TouchableOpacity 
                onPress={() => {
                    navigation.navigate('contactos', {enlace: enlace, persona: persona,setEnviar});
                    setVisible(false);
                }}
                style={style.floatingButton2}
            >
                <Image style={style.img} source={require('../styles/img/m.png')}/>
                <Text style={{color:'white',fontWeight:'bold', fontSize:15, textAlign:'center',}}>Chat</Text>
            </TouchableOpacity>
         
            <TouchableOpacity  style={ style.floatingButton2} 
             onPress={() => {
                navigation.navigate('nuevocontacto', {enlace: enlace, persona: persona,setEnviar});
                setVisible(false);
            }}
            >
                <Image style={style.img} source={require('../styles/img/agrega.png')}/>
                <Text style={{color:'white',fontWeight:'bold', fontSize:15, textAlign:'center',}}>Nuevo contacto</Text>
            </TouchableOpacity>
        </View>
       </ModalPoup>
    {/* Contenedor del chat */}
    <View style={style.mar}>
    <View style={style.mar1}>
  
     <FlatList
    data={salas}
    keyExtractor={item=> item.id_sala}
    renderItem={({item})=>{
        return(
           <VentanaChatM
            item={item}
            persona={persona}
            navigation={navigation}
            setEnviar={setEnviar}
            enviar={enviar}
            enlace={enlace}
            ></VentanaChatM>
        )
    }}

    ></FlatList>
       
    </View>
    <TouchableOpacity 
    onPress={()=>setVisible(true)}
    style={style.floatingButton}>
     <Image style={style.img} source={require('../styles/img/m.png')}/>
    </TouchableOpacity>
    </View>

    {/* Botones en la parte inferior */}
  
  </View>
  )
}
const style=StyleSheet.create({
    cont:{
        height:60,
        backgroundColor:'red',
        marginVertical:12
    },
menu:{
    flexDirection: 'row', 
    justifyContent: 'space-around', 
    alignItems: 'center' ,
    backgroundColor: '#437d81'
},
mar:{
    flex:1
},
mar1:{
    flex:1,
    backgroundColor:'#3b3b3b',
},
btmenu:{
   paddingVertical:20
},
txbt:{
    fontSize:15,
color:'white'
},
floatingButton: {
    backgroundColor: '#437d81', // Color de fondo del botón
    width: 60,
    height: 60,
    borderRadius: 15,
    position: 'absolute',
    bottom: 20, // Posición vertical
    right: 20, // Posición horizontal
    alignItems: 'center',
    justifyContent: 'center',
  },
  floatingButton2: {
    width: 110,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonText: {
    color: 'white', // Color del texto
    fontSize: 24,
    fontWeight: 'bold',
  },
img:{
    width: 35,
    height: 35,
},
modalBackgroun:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.5)',
    justifyContent:'flex-end',
   alignContent:'flex-end',
},
modalContainer:{
    
    width:'100%',
    height:'25%',
    paddingHorizontal:20,
    backgroundColor:'#437d81',
    elevation:10,
    
},
butonmodal:{
    flexDirection:'row',
    justifyContent:'space-around',
    alignItems:'center',
    padding:5,
    paddingTop:30,
    backgroundColor:'#437d81',
    borderRadius:10,
   
}
})

export default PrincipalM