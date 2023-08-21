import React, { useRef } from "react";
import { StyleSheet, Text, ImageBackground,Button, KeyboardAvoidingView, Platform } from "react-native";
import { TextInput, SafeAreaView } from "react-native";
import bg from "../assets/bg-1.jpg";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>;

export const HomeScreen = ({navigation}:HomeProps) => {
    const name = useRef("");
    const role = useRef("");
    const organization = useRef("");
    const distributor = useRef("");
    const mobilenumber = useRef("+");

    console.log(mobilenumber.current);
    console.log(name);
    console.log(role);
    console.log(organization);
    console.log(distributor);


    const setName = (val:string)=>{name.current = val};
    const setRole = (val:string)=>{role.current = val};
    const setOrg = (val:string)=>{organization.current = val};
    const setDist = (val:string)=>{distributor.current = val};
    const setNum = (val:string)=>{mobilenumber.current = val};

    return(
        <ImageBackground source={bg} style={styles.container} resizeMode="cover">
            <SafeAreaView >
            
            <Text style={styles.header}>ENTER YOUR DETAILS</Text>
            
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="" onChange={(event)=>{setName(event.nativeEvent.text)}}/>
            
            <Text style={styles.label}>Role</Text>
            <TextInput style={styles.input} placeholder="" onChange={(event)=>{setRole(event.nativeEvent.text)}}/>
            
            <Text style={styles.label}>Organization</Text>
            <TextInput style={styles.input} placeholder="" onChange={(event)=>{setOrg(event.nativeEvent.text)}}/>
            
            <Text style={styles.label}>Distributor</Text>
            <TextInput style={styles.input} placeholder="" onChange={(event)=>{setDist(event.nativeEvent.text)}}/>

            <Text style={styles.label}>Mobile Number</Text>
            <TextInput 
                style={styles.input} 
                placeholder="" 
                onChange={(event)=>{setNum(event.nativeEvent.text)}}
                keyboardType="numeric"
                maxLength={10}
            />

            <Button 
                title="PROCEED -->"
                color={"#D03772"} 
                onPress={
                    ()=>{
                        navigation.push(
                            'Profile',
                            {name,role,organization,distributor,mobilenumber}
                        )
                    }
                }
            />
            </SafeAreaView>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:'center'
    },

    keyContainer:{
        flex:1
    },

    header:{
        color:"#216462",
        // color:"#D03772",
        fontSize:30,
        marginBottom:40
    },
    label:{
        color:"#475B5A",
        marginBottom:7,
        fontSize:17

    },
    input:{
        color:"black",
        padding:2,
        marginBottom:20,
        borderBottomWidth:1,
        borderBottomColor:"black",
        width:"auto",
        fontSize:15
    }
})