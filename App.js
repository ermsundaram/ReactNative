/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React,{useState} from 'react';
 import {
   RefreshControl,
   SectionList,
   StyleSheet,
   Text,
   View,
 } from 'react-native';
 
 
   const App =  () => {
    const [DynamicData,setDynamicData] = useState([
      {
        title:'Title '+ 1,
        data:['Item '+1+'-1','Item '+1+'-2'] 
     }
    ])
    const counter = DynamicData.length + 1;

    const [Refreshing,setRefreshing] = useState(false)
    const onRefresh = ()=>{
       console.log('on refresh calls=>'+counter)
        setRefreshing(true);                
        setDynamicData([...DynamicData,
          {
            title:'Title '+ counter,
            data:['Item '+counter+'-1','Item '+counter+'-2'] 
         }
        ])
        setRefreshing(false);
    }
  
 
   return (                             
            <SectionList
              keyExtractor={(item,index)=>index.toString()}
              sections={DynamicData}
              renderItem={({item})=>{
               return <Text style={styles.text}>{item}</Text>
                  }
                }
                renderSectionHeader={({section})=>{
                 return <View style={styles.item}>
                    <Text style={styles.text}>{section.title}</Text>
                 </View> 
                }}
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
 