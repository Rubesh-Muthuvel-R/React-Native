import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
} from 'react-native';

import { InputScreen } from './components/InputScreen';

function App(){
  return (
    <SafeAreaView style={styles.container}>
      <InputScreen/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f2f2f2"
  }
});

export default App;
