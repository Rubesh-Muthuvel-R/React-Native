import React from "react"
import { View , StyleSheet, Text } from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons";

export const Footer  = () => {
    return (
        <View style = {styles.main}>
            <View>
                <Icon name="polyline" size={40} color={"black"} style={styles.connector}/>
                <Text style={styles.connector}>Home</Text>
            </View>
            
            <View>
                <Icon name="search" size={40} color={"black"} style={styles.search}/>
                <Text style={styles.search}>Search</Text>
            </View>
            
            <View>
                <Icon name="person" size={40} color={"black"} style={styles.person}/>
                <Text style={styles.person}>Profile</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        backgroundColor:"white",
        flex:0.2,
        height:50,
        flexDirection:"row",
        alignItems:"center",
        justifyContent:"space-between"
    },
    
    connector:{
        // backgroundColor:"gold",
        left:10,
        color:"black"
    },

    search:{
        // backgroundColor:"red",
        color:"black"
    },
    
    person:{
        color:"black",
        // backgroundColor:"silver",
        right:10
    },
})