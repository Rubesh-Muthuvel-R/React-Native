import React from "react"
import { StyleSheet } from "react-native"
import {Header,Main} from "./components/index";
import detail from "./components/Data/data.json"
import { SafeAreaView } from "react-native-safe-area-context";


export const ProfileScreen  = () => {
    return (
        <SafeAreaView style={styles.main}>
            <Header/>
            <Main 
                Name={detail[0].Name} 
                Role={detail[0].Role} 
                Organization={detail[0].Organization} 
                MobileNumber={detail[0].MobileNumber} 
                Distributor={detail[0].Distributor}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#F1F1F1"
    }
})