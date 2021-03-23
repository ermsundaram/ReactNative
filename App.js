import React,{useState} from 'react';
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
  Image,
  ImageBackground
} from 'react-native';

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
       <Pressable
          onPress={onPressHandler}
          android_ripple={{color:'#fff'}}
          style={({pressed})=>[{
            backgroundColor:pressed?'#dddddd':'#00ff00'
          }]}>
            <Text style={styles.text}>
              {submitted?'Clear':'Submit'}
            </Text>
       </Pressable>    
          {
            submitted ?
            <View>
              <Text style={styles.text}>
                  Your name is: {name}
              </Text>
                <Image
                  style={styles.image}
                  source={require('./assets/done.png')}
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

export default App;
