import React from "react"
import {View,StyleSheet,Text} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons";

export const List = ({title,prop,name}:string) =>{
    return(
        <View style = {styles.main}>
            <View style = {styles.icon}>
                <Icon name={name} size={30} color={"grey"} style={styles.icon}/>
            </View>
            
            <View>
                <Text style={{color:"grey"}}>{title}</Text>
                <Text style={{color:"black"}}>{prop}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        padding:10,
        flexDirection:"row",
        borderBlockColor:"black",
        backgroundColor:"white",
        margin:10,
        borderRadius:10,
    },
    icon:{
        justifyContent:"center",
        padding:2,
        marginRight:5
    }
})