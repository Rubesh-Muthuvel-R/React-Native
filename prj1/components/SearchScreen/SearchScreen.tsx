import React from "react"
import {SafeAreaView,Text,StyleSheet} from "react-native"

export const SearchScreen = () =>{
    return(
        <SafeAreaView style={styles.component}>
            <Text style={{fontSize:40 , color:"black"}}>Coming Soon........</Text>        
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    component:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})