import React, {forwardRef}from "react"
import { ImageBackground, StyleSheet, SafeAreaView} from "react-native"
import {Header,Main} from "./components/index";
import bg from "../../assets/bg-1.jpg";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";

type ProfileProps = NativeStackScreenProps<RootStackParamList,'Profile'>;

export const ProfileScreen  = ({route}:ProfileProps) => {
    console.log(route.params.name);
    console.log(1)
    return (
        <SafeAreaView style={styles.main}>
            <ImageBackground source={bg} style={styles.bg}>
                <Header/>
                <Main Details={route.params}/>
            </ImageBackground>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        backgroundColor:"#F1F1F1",
    },
    bg:{
        flex:1,
    }
})