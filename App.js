import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ScreenA from './ScreenA'
import ScreenB from './ScreenB'

import React from 'react';

  const Stack = createStackNavigator()

  const App =  () => {
  
   return (                             
     <NavigationContainer>
       <Stack.Navigator 
         screenOptions={{
          header:()=>null
        }}>
          <Stack.Screen
          name='Screen_A'
          component={ScreenA}    
          />
          <Stack.Screen
          name='Screen_B'
          component={ScreenB}/>
          
       </Stack.Navigator>

     </NavigationContainer>       
  );
};

export default App;
