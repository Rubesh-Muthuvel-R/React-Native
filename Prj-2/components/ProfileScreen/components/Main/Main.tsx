import React from "react"
import { View, StyleSheet} from "react-native"
import { List } from "./components/List";

interface Ref{
    current : string
}
interface Detailprops {
    name: Ref;
    role: string;
    organization: Ref;
    distributor: Ref;
    mobilenumber: Ref;
}

interface Data {
    Details:Detailprops
}

export const Main = ({Details}: Data) => {
    return (

        <View style = {styles.main}>
            <List 
                title={"Mobile Number"} 
                prop={"+91 "+Details.mobilenumber.current} 
                name={"phone"}
            />
            <List title={"Name"} prop={Details.name.current} name={"person"}/>
            <List title={"Role"} prop={Details.role} name={"adjust"}/>
            <List title={"Organization"} prop={Details.organization.current} name={"apartment"}/>
            <List title={"Distributor"} prop={Details.distributor.current} name={"boy"}/>
        </View>
    )
}
    
    const styles = StyleSheet.create({
    main:{
        top:40,
        color:"black"
    }
})