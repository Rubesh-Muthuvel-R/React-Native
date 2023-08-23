import React from "react"
import { ImageBackground, StyleSheet, SafeAreaView, Button} from "react-native"
import {Header,Main} from "./components/index";
import bg from "../../assets/bg-1.jpg";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../../App";
import  Icon  from "react-native-vector-icons/MaterialIcons";

type ProfileProps = NativeStackScreenProps<RootStackParamList,'Profile'>;

export const ProfileScreen  = ({navigation,route}:ProfileProps) => {
    return (
        <SafeAreaView style={styles.main}>
            <ImageBackground source={bg} style={styles.bg}>
                <Icon name="arrow-back" size={30} style={styles.back} onPress={()=>{navigation.goBack()}}/>
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
    },
    back:{
        color:"#343434",
        padding:10,
    }
})