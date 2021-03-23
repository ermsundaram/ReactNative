import React,{useState} from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  ToastAndroid,
  View,
} from 'react-native';
import axios from 'axios';

const App = () => {
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');

  const loginUser = async()=>{
    if(email==''){
      ToastAndroid.show(`Res=${ToastAndroid.show(`Email Id is required`,ToastAndroid.SHORT)}}`,ToastAndroid.SHORT)
    }else if(password==''){
      ToastAndroid.show(`Res=${ToastAndroid.show(`Password is required`,ToastAndroid.SHORT)}}`,ToastAndroid.SHORT)
    }else{
      axios
      .post('https://staging.buddi.life:4500/iBuddyPlatformAPI/student/login', {
        deviceType: 'mobile',
          email: email,
          password: password,
          fcmToken:'esChUECQRkW5zxd-V6JcMm:APA91bFT4kP4gdw3klytO1052wI4kCDgBGfafVCPteCx6f0om_6nWSsxt26ipCQP7h4SWrcuIzZRXK-_gm7yoVWhZWOoFmJOFR-FezPdoGI4O5VUaLzRU6dQomphLY8EZ7qHCia4k_nu'
      })
      .then(function (response) {
        // handle success
        alert(JSON.stringify(response.data.studentData));
      })
      .catch(function (error) {
        // handle error
        alert(error.message);
      });
    }    
  }
  
  return (
    <View>
      <Text style={styles.sectionTitle}>Login Page</Text>
      <View>
        <Text style={{margin:10}}>Email</Text>
        <TextInput
            style={styles.sectionContainer}
        placeholder='Email'
        onChangeText={(value)=>{
          setEmail(value)
        }}/>
      </View>
      <View>
        <Text style={{margin:10}}>Password</Text>
        <TextInput
        style={styles.sectionContainer}
        placeholder='Password'
        onChangeText={(value)=>{
          setPassword(value)
        }}/>
      </View>
      <Button    
        title='Login'
        onPress={loginUser}/>
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    borderWidth:1,
    borderColor:'#d3d3d3',
    borderRadius:5,
    margin:10
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    textAlign:'center'
  }
});

export default App;
