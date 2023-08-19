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

export const Main = ({Detail}: Detailprops[]) => {
    return (
        <View style = {styles.main}>
            <List title={"Mobile Number"} prop={Detail[0].MobileNumber} name={"phone"}/>
            <List title={"Name"} prop={Detail[0].Name} name={"person"}/>
            <List title={"Role"} prop={Detail[0].Role} name={"adjust"}/>
            <List title={"Organization"} prop={Detail[0].Organization} name={"apartment"}/>
            <List title={"Distributor"} prop={Detail[0].Distributor} name={"boy"}/>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        borderBottomColor:"white",
        border:10,
        flex:2,
        top:50,
        color:"black"
    }
})