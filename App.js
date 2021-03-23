 import React,{useState} from 'react';
 import {
   Button,
   StyleSheet,
   Text,
   TextInput,
   View,
 } from 'react-native';
 
   const App =  () => {
    const [name,SetName] = useState('')
    const [submitted,SetSubmitted] = useState(false)

    const onPressHandler =()=>{
        SetSubmitted(!submitted);
    }

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
        />
        <Button
           title={submitted?'Clear':'submit'}
           onPress={onPressHandler}
           color='#00f'/>
           
           {
             submitted? <Text style={styles.text}>
             Your name is: {name}
         </Text>:null
           }
        
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
    fontSize:20,
    marginBottom:10
  }
 });
 
 export default App;
 