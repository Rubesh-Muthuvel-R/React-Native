import React from "react"
import { Text, View, StyleSheet} from "react-native"
import { List } from "./components/List";
// import { Colors } from "react-native/Libraries/NewAppScreen";


// :React.FC<Detail>

interface Detailprops {
    Name: string;
    Role: string;
    Organization: string;
    Distributor: string;
    MobileNumber: string;
}

export const Main = ({Name,Role,Organization,MobileNumber,Distributor}: Detailprops) => {
    return (
        <View style = {styles.main}>
            <List title={"Mobile Number"} prop={MobileNumber} name={"phone"}/>
            <List title={"Name"} prop={Name} name={"person"}/>
            <List title={"Role"} prop={Role} name={"adjust"}/>
            <List title={"Organization"} prop={Organization} name={"apartment"}/>
            <List title={"Distributor"} prop={Distributor} name={"boy"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        top:40,
        color:"black"
    }
})