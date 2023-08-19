import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import{ SplashScreen} from './components/SplashScreen/SplashScreen';
import { ProfileScreen } from './components/ProfileScreen';

function App(){

  return(
    <SafeAreaView style={styles.bg}>
      {/* <SplashScreen /> */}
      <ProfileScreen/>
    </SafeAreaView>
)
}

const styles = StyleSheet.create({
  bg:{
    flex:1,
  }
});

export default App;
