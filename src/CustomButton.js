import React from 'react'
import {
    Pressable,
    StyleSheet,
    Text
  } from 'react-native';

const MyButton = (props) => {
    return (
        <Pressable
            onPress={props.onPressHandler}
            android_ripple={{color:'#fff'}}
            style={({pressed})=>[
                {
                   backgroundColor:pressed?'#dddddd':  props.color                   
                },styles.button,{...props.style}
        ]}>
          <Text style={styles.text}>
            {props.title}
          </Text>
     </Pressable> 
    )
}


const styles = StyleSheet.create({
    text: {
     color: '#000000',
     fontSize: 20,    
     margin: 10,
     textAlign:'center'
   },
   button:{
    width:150,
    height:50,
    alignItems:'center',
  }
  });

export default MyButton
