import {StyleSheet } from "react-native";

export default StyleSheet.create({
    body: {
        flex:1,    
        backgroundColor: '#ffffff',
        alignItems:'center'
      },
      text: {
       color: '#000000',
       fontSize: 20,    
       margin: 10,
       textAlign:'center'
     },
     input:{
       width:200,
       borderWidth:1,
       borderColor:'#555',
       borderRadius:5,
       textAlign:'center',
       fontSize:20,
       marginBottom:10
     },
     button:{
      width:150,
      height:50,
      backgroundColor:'#00ff00',
      alignItems:'center',
      marginBottom:20
    },
    warning_modal:{
      width:300,
      height:300,
      backgroundColor:'#FFF',
      borderWidth:1,
      borderColor:'#000',
      borderRadius:20
    },
    centered_view:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#00000099'
    },
    warning_title:{
      height:50,
      justifyContent:'center',
      alignItems:'center',
      backgroundColor:'#ff0',
      borderTopLeftRadius:20,
      borderTopRightRadius:20
    },
    warning_body:{
      height:200,
      justifyContent:'center',
      alignItems:'center',
    },
    warning_button:{
      backgroundColor:'#0effff',
      borderBottomLeftRadius:20,
      borderBottomRightRadius:20
    },
    image:{
      width:100,
      height:100,
      margin:10
    }
});