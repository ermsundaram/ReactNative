import React,{useState} from 'react';
import {
  Modal,
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground
} from 'react-native';
import MyButton from './CustomButton';

import styles from "./styles/appstyle";

  const App =  () => {
   const [name,SetName] = useState('')
   const [submitted,SetSubmitted] = useState(false)
   const [showWarning,SetShowWarning] = useState(false)
   const onPressHandler =()=>{
      if(name.length>3){
        SetSubmitted(!submitted);
      }else{
        SetShowWarning(true)
      }       
   }

   return (                             
     <ImageBackground
     source={{ uri: 'https://cdn.pixabay.com/photo/2013/07/12/12/35/texture-145968_960_720.png' }}
      style={styles.body}>
       <Modal
       transparent
        visible={showWarning}
        onRequestClose={()=> SetShowWarning(false)}
        animationType='slide'>
          <View style={styles.centered_view}>           
            <View style= {styles.warning_modal}>
              <View style= {styles.warning_title}>
                <Text style={styles.text}>WARNING!</Text>
              </View>
              <View style={styles.warning_body}>
                <Text style={styles.text}>The name must be longer than 3 chars</Text>
              </View>
              <Pressable onPress={()=>SetShowWarning(false)} style={styles.warning_button}>
              <Text style={styles.text}>Ok</Text>
              </Pressable>
            </View>
          </View>
       </Modal>  
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
       <MyButton
          onPressHandler = {onPressHandler}
          title = {submitted?'Clear':'Submit'}
          color={'#00ff00'}
       />
       <MyButton
          onPressHandler = {()=>{}}
          title = {'Test'}
          color={'#ff00ff'}
          style={{margin:10}}
       />    
          {
            submitted ?
            <View>
              <Text style={styles.text}>
                  Your name is: {name}
              </Text>
                <Image
                  style={styles.image}
                  source={require('../assets/done.png')}
                  resizeMode='stretch'
                />
            </View>:
            <Image
              style={styles.image}
              source={
                { 
                uri: 'https://cdn.pixabay.com/photo/2018/01/04/15/51/404-error-3060993_960_720.png' }}          
                resizeMode='stretch'
            />
          }
       
     </ImageBackground>        
  );
};

export default App;
