/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';


  const App =  () => {


  return (
     
      <View style={styles.body}>

        <View style={styles.rowView}>
          <View style={styles.view1}>
            <Text style={styles.text}>1</Text>
          </View>
          <View style={styles.view2}>
            <Text style={styles.text}>2</Text>
          </View>
          <View style={styles.view3}>
            <Text style={styles.text}>3</Text>
          </View> 
        </View>
        <View style={styles.rowView}>
          <View style={styles.view4}>
             <Text style={styles.text}>4</Text>
          </View>        
        </View>
        <View style={styles.rowView}>
          <View style={styles.view5}>
             <Text style={styles.text}>5</Text>
          </View>
        </View>
               
        <View style={styles.rowStretchView}>
          <View style={styles.view6}>
            <Text style={styles.text}>6</Text>
          </View>  
          <View style={styles.view7}>
            <Text style={styles.text}>7</Text>
          </View>    
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex:1,
    flexDirection: 'column',
    alignItems:'center',
    backgroundColor: '#ffffff',
    justifyContent: 'flex-start'
  },
  rowView: {
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'center'  
  },
  columnView:{
    flex:1,
    flexDirection:'column',
    alignItems:'stretch',
    justifyContent:'center'
  },
  rowStretchView:{
    flex:1,
    flexDirection:'row',
    alignItems:'stretch',
    justifyContent:'center'
  },
  view1: {
    flex:1,
    backgroundColor:'#00FFFF',
    alignItems:'center',
    justifyContent:'center'  
  },
  view2: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'#ff00ff',
    alignItems:'center',
    justifyContent:'center'  
  },
  view3: {
    flex:1,
    flexDirection:'row',
    backgroundColor:'#ffff00',
    alignItems:'center',
    justifyContent:'center'  
  },
  view4: {
    flex:1,  
    backgroundColor:'#f00',
    alignItems:'center',
    justifyContent:'center'  
  },
  view5: {
    flex:1,
    backgroundColor:'#228B22',
    alignItems:'center',
    justifyContent:'center'  
  },
  view6: {
    flex:1,
    backgroundColor:'#ffffff',
    alignItems:'center',
    justifyContent:'center'  
  },
  view7: {
    flex:1,
    backgroundColor:'#0000ff',
    alignItems:'center',
    justifyContent:'center'  
  }
});

export default App;
