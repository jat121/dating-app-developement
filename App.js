import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from "./components/MainScreen"
const Stack = createNativeStackNavigator();
import { extendTheme, NativeBaseProvider } from 'native-base';

const App = () => {
  return (
    <NativeBaseProvider>
    <NavigationContainer>
         <Stack.Navigator screenOptions={()=>({
          headerShown: false
        })} >
          <Stack.Screen name="Main" component={MainScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      </NativeBaseProvider>
  )
}

export default App