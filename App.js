import React,{useState} from 'react';
import {
  Alert,
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  TouchableHighlight,
  TouchableOpacity,
  View,
} from 'react-native';

  const App =  () => {
   const [name,SetName] = useState('')
   const [submitted,SetSubmitted] = useState(false)

   const onPressHandler =()=>{
      if(name.length>3){
        SetSubmitted(!submitted);
      }else{
        //ToastAndroid.show('Required more than 3 chars',ToastAndroid.LONG)

        Alert.alert('Warning','The name must be longer than 3 chars',[
          {text:'Do not show Again',onPress:()=>console.warn('Do not show Again pressed')},
          {text:'Cancel',onPress:()=>console.warn('Cancel pressed')},
          {text:'Ok',onPress:()=>console.warn('Ok pressed')},        
        ],{cancelable:true,onDismiss:()=>console.warn('onDismiss pressed')})
      }
       
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
       <Pressable
          onPress={onPressHandler}
          style={({pressed})=>[{
            backgroundColor:pressed?'#dddddd':'#00ff00'
          }]}>
            <Text style={styles.text}>
              {submitted?'Clear':'Submit'}
            </Text>
       </Pressable>    
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
 },
 button:{
  width:150,
  height:50,
  backgroundColor:'#00ff00',
  alignItems:'center',
  marginBottom:20
}
});

export default App;
