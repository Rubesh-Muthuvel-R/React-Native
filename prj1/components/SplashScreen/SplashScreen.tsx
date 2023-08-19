import React from "react";
import { Image, StyleSheet, View } from "react-native";

export const SplashScreen = ()=>{
    return(
        <View style={styles.bg}>
            <Image source={require("../../assets/logo1.png")} />
        </View>
    )
}

const styles = StyleSheet.create({
    bg :  {
      flex:1,
      backgroundColor : "#025144",
      alignItems:"center",
      justifyContent:"center",
    },
});

