import { StyleSheet } from "react-native";
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
    },
    btnContainer2:{
        marginTop:30,
    },
    inp:{
        width:200,
        height:50,
        backgroundColor:Mycolors.dark,
        borderRadius:5,
        padding:10,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:2,
        borderColor:Mycolors.high,
        margin:10,
        color:'white',
    }

})