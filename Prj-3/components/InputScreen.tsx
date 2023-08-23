import React, { useEffect, useState } from "react";
import {
    Button,
    Image,
    StyleSheet,
    TextInput,
    Text,
    View,
} from 'react-native';
  
import Icon from "../assets/logo.png";
import axios from "axios";

type Details = {
    login:string,
    id:number,
    type:string,
    created_at:string,
    updated_at:string,
    public_repos:number
}

export const InputScreen = () =>{
    const [name,setName] = useState<string>("");
    const [userDetails,setUserDetails] = useState<Details|null>(null);
    
    // const getDetails = async (username:string):Promise<Details> =>{
    //     const url = `https://api.github.com/users/${username}`;
    //     const res = await fetch(url);
    //     const data = await res.json();
    
    //     return {login:data.login,id:data.id,type:data.type,created_at:data.created_at,updated_at:data.updated_at}
    // }

    const getDetails = async (username:string):Promise<Details> => {
        const url = `https://api.github.com/users/${username}`
        const {data} = await axios.get<Details>(url)
        return {id:data.id,login:data.login,type:data.type,created_at:data.created_at,updated_at:data.updated_at,public_repos:data.public_repos};
    }

    // const handlePress = async() => {
    //     const val = await getDetails(name);
    //     setUserDetails(val);
    // }

    return (
        <View>
            <View style={styles.container}>
                <Image source={Icon} resizeMode="contain"  style={styles.logo}/>
                <TextInput placeholder="Username" placeholderTextColor="grey" style={styles.input} onChangeText={(e)=>{setName(e)}}></TextInput>
                <Button title="Find" color={"black"} onPress={()=>{getDetails(name).then(setUserDetails)}}/>
            </View>
            {
                userDetails&&(
                    <View style={styles.textContainer}>
                        <Text style={styles.text}>Login: {userDetails.login}</Text>
                        <Text style={styles.text}>Id: {userDetails.id}</Text>
                        <Text style={styles.text}>Type: {userDetails.type}</Text>
                        <Text style={styles.text}>Publi Repos: {userDetails.public_repos}</Text>
                        <Text style={styles.text}>Created at: {userDetails.created_at}</Text>
                        <Text style={styles.text}>Last modified: {userDetails.updated_at}</Text>
                    </View>
                )
            }
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    },
    logo:{
        width:70,
        height:40,
        marginBottom:20
    },
    input:{
        color:"black",
        borderColor:"black",
        borderWidth:1,
        width:200,
        marginBottom:20
    },
    text:{
        color:"black",
        fontSize:15,
        padding:10
    },
    textContainer:{
        flex:1,
    }
});
  