import React from "react"
import { StyleSheet, Text, View } from "react-native"
import {Header,Main,Footer} from "./components/index";
import detail from "./components/Data/data.json"

export const ProfileScreen  = () => {
    return (
        <View style={styles.main}>
            <Header/>
            <Main Detail={detail} />
            <Footer/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#E2DFD2"
    }
})