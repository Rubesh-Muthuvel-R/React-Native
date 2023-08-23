import React, { useRef, useState } from "react";
import { StyleSheet, Text, ImageBackground,Button, KeyboardAvoidingView, Platform, Alert, View } from "react-native";
import { TextInput, SafeAreaView } from "react-native";
import bg from "../assets/bg-1.jpg";
import {Picker} from "@react-native-picker/picker";
import {NativeStackScreenProps} from "@react-navigation/native-stack";
import {RootStackParamList} from "../App";

type HomeProps = NativeStackScreenProps<RootStackParamList,'Home'>;

export const HomeScreen = ({navigation}:HomeProps) => {
    const name = useRef("");
    // const role = useRef("");
    const [role,setRole] = useState("");
    const organization = useRef("");
    const distributor = useRef("");
    const mobilenumber = useRef("");

    const setName = (val:string)=>{name.current = val};
    // const setRole = (val:string)=>{role.current = val};
    const setOrg = (val:string)=>{organization.current = val};
    const setDist = (val:string)=>{distributor.current = val};
    const setNum = (val:string)=>{mobilenumber.current = val};

    const notEmpty = (str:string):boolean =>{
        return str.length>0;
    }

    return(
        <ImageBackground source={bg} style={styles.container} resizeMode="cover">
            <SafeAreaView >
            
            <Text style={styles.header}>ENTER YOUR DETAILS</Text>
            
            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} placeholder="" onChange={(event)=>{setName(event.nativeEvent.text)}}/>
            
            <Text style={styles.label}>Role</Text>
            <View style={{borderColor:"black",borderWidth:1,marginBottom:10}}>
                <Picker 
                    style={styles.comboBox} 
                    selectedValue={role}
                    dropdownIconColor="black"
                    onValueChange={(itemValue:string)=>{setRole(itemValue)}}
                    >
                    <Picker.Item label="Intern" value="Intern"></Picker.Item>
                    <Picker.Item label="FTE" value="FTE"></Picker.Item>    
                </Picker>
            </View>
            
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
                        let chk:boolean = 
                            notEmpty(name.current) && 
                            notEmpty(role) && 
                            notEmpty(organization.current) && 
                            notEmpty(distributor.current) &&
                            notEmpty(mobilenumber.current) ? true :false;


                        if(chk){
                            let isNumber = (str:string)=>{return (/^\d{10}/).test(str);}
                            if(isNumber((mobilenumber.current))  ){
                                navigation.push(
                                    'Profile',
                                    {name,role,organization,distributor,mobilenumber}
                                )
                            }else{
                                Alert.alert("Please check your contact");
                            }
                        }else{
                            Alert.alert("Please fill all fields")
                        }
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
    },
    comboBox:{
        color:"black",
    }
})