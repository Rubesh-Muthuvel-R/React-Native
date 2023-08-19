import React from "react"
import { Text, View , StyleSheet} from "react-native"

export const Header  = () => {
    return (
        <View style = {styles.main}>
            <Text style={{color:"black",fontSize:30}}>Profile</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:0.1,
        top:10,
        left:10
    }
})