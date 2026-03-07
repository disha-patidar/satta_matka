import { View, Text, FlatList, StyleSheet } from "react-native";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "../../services/api";

export default function Passbook(){

const [data,setData] = useState<any[]>([]);

useEffect(()=>{
loadPassbook();
},[]);

const loadPassbook = async()=>{

const user = await AsyncStorage.getItem("user");

if(!user) return;

const parsed = JSON.parse(user);

const res = await API.get(`/passbook/${parsed._id}`);

setData(res.data);

};

const renderItem = ({item}:any)=>{

const date = new Date(item.date);

return(

<View style={styles.row}>


<Text style={styles.cell}>
{date.toLocaleDateString()}{"\n"}
{date.toLocaleTimeString()}
</Text>

<Text style={styles.cell}>
{item.particulars}
</Text>

<Text style={styles.cell}>
{item.previousAmount}
</Text>

<Text style={[styles.cell,{color:"green"}]}>
{item.transactionAmount}
</Text>

<Text style={styles.cell}>
{item.currentAmount}
</Text>

</View>

);

};

return(

<View style={styles.container}>

<View style={styles.header}>

<Text style={styles.headerText}>Date</Text>
<Text style={styles.headerText}>Particulars</Text>
<Text style={styles.headerText}>Prev</Text>
<Text style={styles.headerText}>Txn</Text>
<Text style={styles.headerText}>Curr</Text>

</View>

<FlatList
data={data}
renderItem={renderItem}
keyExtractor={(item)=>item._id?.toString()}
/>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff"
},

header:{
flexDirection:"row",
backgroundColor:"#f4a623",
padding:12
},

headerText:{
flex:1,
fontWeight:"bold",
color:"#000"
},

row:{
flexDirection:"row",
padding:12,
borderBottomWidth:1,
borderColor:"#eee"
},

cell:{
flex:1,
fontSize:13
}

});