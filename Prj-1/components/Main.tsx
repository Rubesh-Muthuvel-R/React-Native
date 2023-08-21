import React from 'react';
// import {SafeAreaView, StyleSheet} from 'react-native';
import { ProfileScreen } from "./ProfileScreen/index";
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeScreen } from './HomeScreen/HomeScreen';
import { SearchScreen } from './SearchScreen/SearchScreen';
import Icon from "react-native-vector-icons/MaterialIcons";


const Tab = createBottomTabNavigator();
// const Stack = createNativeStackNavigator();

interface IconProp{
  focused:boolean,
  color:string,
  size:number
}

function Main(){
  return(
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Splash'>
    //     <Stack.Screen name='Splash' component={SplashScreen} options={{title:'om'}}></Stack.Screen>
    //     <Stack.Screen name='Profile' component={ProfileScreen}></Stack.Screen>
    //   </Stack.Navigator>
    // </NavigationContainer>

    // <SafeAreaView style={styles.bg}>
    //   <ProfileScreen/>
    // </SafeAreaView>

    <NavigationContainer>
      <Tab.Navigator initialRouteName="Home" screenOptions={({route})=>({
        headerShown:false,
        tabBarIcon:({focused,color,size}:IconProp)=>{
          let iconName:string = '';
          let rn = route.name;

          if(rn==='Home'){
            iconName = focused?'polyline':'polyline'
          }else if(rn==='Search'){
            iconName = focused?'search':'search-off'
          }else if(rn==='Profile'){
            iconName = focused?'person':'person-outline'
          }

          return <Icon name={iconName}  size={size} color={color} />
        }
      })}
      
      // tabBarOptions={{
      //   labelStyle:{fontSize:10},
      //   style:{padding:10,hegiht:70} 
      // }}
      >
        <Tab.Screen  name="Home" component={HomeScreen}></Tab.Screen>
        <Tab.Screen name="Search" component={SearchScreen}></Tab.Screen>
        <Tab.Screen name="Profile" component={ProfileScreen}></Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
)
}

// const styles = StyleSheet.create({
//   bg:{
//     flex:1,
//   }
// });

export default Main;
