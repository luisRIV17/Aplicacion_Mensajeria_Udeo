import { StyleSheet, useWindowDimensions } from "react-native";
import { Mycolors } from "./color";

export const mst = StyleSheet.create({

   
    myContainer: {
        marginTop:30,
        justifyContent: 'center', // Centra verticalmente
        alignItems: 'center', // Centra horizontalmente
    },
    Back:{
        flex:1,
        resizeMode: 'cover',
        width: null, // Establece el ancho en null
        height: 800, // Establece el alto en null
    },
    title: {
        fontSize:30,
        fontWeight:'100',
        color:'white'
    },
    logo:{
        margin:30,
        width:150,
        height:125,
     
    },
    btn:{
        width:200,
        height:50,
        backgroundColor:Mycolors.high,
        borderRadius:5,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:Mycolors.dark,
        margin:10,
       
    },
    btnContainer:{
        marginTop:125,
        alignItems: 'center', // Centra horizontalmente
    },
    btnContainer2:{
        marginTop:30,
        alignItems: 'center', // Centra horizontalmente
    },
    inp:{
        width:230,
        height:50,
        backgroundColor:Mycolors.dark,
        borderRadius:5,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:Mycolors.high,
        margin:5,
        color:'white',
    },
    label:{
      width:240,
      padding:4,
      marginTop:10,
      marginBottom:0,
    },
    stepsContainer:{
     
      alignItems:"center"
       
   },
   datePicker:{
    width:230,
    height:50,
    backgroundColor:Mycolors.dark,
    borderRadius:5,
    padding:10,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:2,
    borderColor:Mycolors.high,
    margin:5,
    color:'white',
   },

    //*** slides  */

    container: {
        flex: 1,
      },
      slide: {
        //width: Dimensions.get('window').width,
        height: 200,
      },
      indicatorContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 10,
      },
      indicator: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: 'blue', // Cambia el color del indicador
        margin: 5,
      },
      btn2:{
        backgroundColor:'blue',
      
    
      },
      mod:{
        maxHeight:500,
        borderTopLeftRadius:8,
        borderTopRightRadius:8,
        marginBottom:30,
      paddingVertical:10,
        margin:15,
       // borderColor:'black',
        //borderWidth:2,
        shadowColor: 'black',
        shadowOffset: { width:0 , height: 5 },
        shadowOpacity: 0.6,
        shadowRadius:8 ,
        elevation:5, // Este es específico de Android
        backgroundColor:Mycolors.dark,
    },
    modContainer:{
        flex:1,
     
       padding:2,
       alignItems:'flex-end'
    },
    closeBtn:{
        borderColor:'black',
        borderRadius:15,
        borderWidth:3,
        backgroundColor:Mycolors.high,
        width: 325,
        padding:5,
        margin:5,
    },
    optionsBtn:{

      borderColor:Mycolors.high,
      borderRadius:1,
      borderBottomWidth:2,
      width: 200,
      padding:10,
      margin:0,
      alignItems:'center'

  },
  feedback:{
    height:700,
    width:375,
  
    paddingTop: '12%',
   
   
    alignItems:"flex-end"
  },
  cardBack:{
    flex:1,
    alignItems:'center',
    padding:15,
    backgroundColor:Mycolors.dark,

  },
  imgContainer:{
    marginVertical:20,
    backgroundColor: Mycolors.high,
    borderRadius: 100,
    

    padding:40,
 
  },
  datosContainer:{
   alignItems:"center",
   padding: 10,
   margin:10,
   width:200
   
  },
  imgStyle:{
    maxWidth:100,
    maxHeight:100,
  },
  label1:
  {
    padding:2,
    borderColor:Mycolors.high,
    borderTopWidth:1,
    color:Mycolors.high,
    marginBottom:20,
    width:250,
    textAlign:"center",
    fontWeight:'600'
  },
  label2:
  {
    padding:2,
    color:'white'
    
  },
  actulizarBtn:{
    backgroundColor:Mycolors.light,
    padding:10,
    margin:10,
    width:200,
    textAlign:"center"
  
  }

})