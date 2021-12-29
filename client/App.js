
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator} from '@react-navigation/native-stack';
import QuizApp from './screens/home';
import Questions from './screens/questions';
import {RecoilRoot} from 'recoil';


function App() {
  const Stack = createNativeStackNavigator();
  
  return (
    <RecoilRoot>
         <React.Suspense fallback="Loading weather...">
    <NavigationContainer>
      <Stack.Navigator>
        
        
     
        <Stack.Screen name="Home" component={QuizApp} />
        <Stack.Screen name="Quiz" component={Questions} />
      </Stack.Navigator>
    </NavigationContainer>
    </React.Suspense>
    
    </RecoilRoot>
  );
}



export default App;
