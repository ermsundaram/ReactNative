/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {
   FlatList,
   RefreshControl,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 
   const App =  () => {
    const [Items,setItems] = useState([
      {
        name:'Item 1'
      },
      {
        name:'Item 2'
      },
      {
        name:'Item 3'
      },
      {
        name:'Item 4'
      },
      {
        name:'Item 5'
      },
      {  
        name:'Item 6'
      },
      {
        name:'Item 7'
      },
      {
        name:'Item 8'
      },
    ])

    const [Refreshing,setRefreshing] = useState(false)
    const onRefresh = ()=>{
        setRefreshing(true);
        setItems([...Items,{name:'Item 69'}])
        setRefreshing(false);
    }
  
 
   return (    
            <FlatList 
              keyExtractor={(item,index)=>index.toString()}
              data={Items}
              renderItem={({item})=>{
                return <View style={styles.item}>
                  <Text style={styles.text}>{item.name}</Text>
                </View> 
              }
              }
              refreshControl={
                <RefreshControl
                  refreshing={Refreshing}
                  onRefresh={onRefresh}
                  colors={['#ff00ff']}/>
                }          
            />                
   );
 };
 
 const styles = StyleSheet.create({
   body: {
     flex:1,
     flexDirection: 'column',
     backgroundColor: '#ffffff'
   },
   item: {
     margin:10,
     backgroundColor:'#4ae1fa',
     alignItems:'center',
     justifyContent:'center'  
   },
   text: {
    color: '#000000',
    fontSize: 45,
    fontStyle: 'italic',
    margin: 10,
  }
 });
 
 export default App;
 