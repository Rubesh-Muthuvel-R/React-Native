import React, { MutableRefObject } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { HomeScreen } from './components/HomeScreen';
import { ProfileScreen } from "./components/ProfileScreen/index";

export type RootStackParamList = {
  Home: undefined;
  Profile: {
    name:MutableRefObject<string>,
    role:MutableRefObject<string>,
    organization:MutableRefObject<string>,
    distributor:MutableRefObject<string>,
    mobilenumber:MutableRefObject<string>
  }
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
        initialRouteName="Home" 
        screenOptions={{
          headerShown:false,
        }}
      >
        <Stack.Screen name="Home" component={HomeScreen}/>
        <Stack.Screen name="Profile" component={ProfileScreen}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
