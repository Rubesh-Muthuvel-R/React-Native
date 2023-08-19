import React from "react"
import {View,StyleSheet,Text} from "react-native"
import Icon from "react-native-vector-icons/MaterialIcons";

interface props {
    title:string,
    prop:string,
    name:string
}

export const List = ({title,prop,name}:props) =>{
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
        padding:8,
        marginRight:20,
        marginLeft:20,
        marginTop:10,
        backgroundColor:"white",
        flexDirection:"row",
        borderRadius:5,
    },
    icon:{
        justifyContent:"center",
        padding:2,
        marginRight:5
    }
})