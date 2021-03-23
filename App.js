/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {
   StyleSheet,
   Text,
   TextInput,
   View,
 } from 'react-native';
 
   const App =  () => {
    const [name,SetName] = useState('')
    return (                             
      <View style={styles.body}>
        <Text style={styles.text}>
          Please Write your name
        </Text>
        <TextInput

          style={styles.input}
          placeholder='e.g.Eswar'
          onChangeText={(value)=>{
            SetName(value)
          }
        }
        secureTextEntry
        />
         <Text style={styles.text}>
          Your name is: {name}
        </Text>
      </View>        
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex:1,    
     backgroundColor: '#ffffff',
     alignItems:'center'
   },
   text: {
    color: '#000000',
    fontSize: 20,    
    margin: 10,
  },
  input:{
    width:200,
    borderWidth:1,
    borderColor:'#555',
    borderRadius:5,
    textAlign:'center',
    fontSize:20
  }
 });
 
 export default App;
 