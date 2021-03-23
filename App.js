import React,{useState} from 'react';
import {
  Button,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  TouchableOpacity,
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
       <TouchableOpacity
          style={styles.button}
          onPress={onPressHandler}>
            <Text style={styles.text}>
              {submitted?'Clear':'Opacity Effect'}
            </Text>
       </TouchableOpacity>  
       <TouchableHighlight
          style={styles.button}
          onPress={onPressHandler}
          underlayColor='#e3e3'>
            <Text style={styles.text}>
              {submitted?'Clear':'HighLight Effect'}
            </Text>
       </TouchableHighlight>     
       <Pressable
          onPress={onPressHandler}
          style={({pressed})=>[{
            backgroundColor:pressed?'#dddddd':'#00ff00'
          }]}>
            <Text style={styles.text}>
              {submitted?'Clear':'Pressable Effect'}
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
