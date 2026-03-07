import React, { useEffect, useState } from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity,
FlatList
} from "react-native";

import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
type WithdrawRequest = {
  _id: string;
  amount: number;
  method: string;
  status: string;
};
export default function WithdrawRequests(){

const router = useRouter();
const [requests,setRequests] = useState<WithdrawRequest[]>([]);
const [userId,setUserId] = useState("");

const fetchRequests = async (id:string)=>{

try{

const res = await axios.get(
`https://satka-matka.onrender.com/api/wallet/user-withdraws/${id}`
);

setRequests(res.data);

}catch(err){
console.log(err);
}

};

const loadUser = async ()=>{

const userData = await AsyncStorage.getItem("user");

if(userData){

const user = JSON.parse(userData);

setUserId(user._id);

fetchRequests(user._id);

}

};

useEffect(()=>{
loadUser();
},[]);

return(

<View style={styles.container}>

<View style={styles.header}>

<TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="arrow-back" size={24}/>
</TouchableOpacity>

<Text style={styles.title}>
Withdraw Requests
</Text>

</View>

{requests.length === 0 ? (

<View style={styles.noDataContainer}>

<Image
source={require("../assets/images/ban.png")}
style={styles.image}
/>

{/* <Text style={styles.noDataText}>
No Data Found!
</Text> */}

</View>

) : (

<FlatList
data={requests}
keyExtractor={(item)=>item._id}
renderItem={({item})=>(

<View style={styles.card}>

<Text style={styles.amount}>
₹ {item.amount}
</Text>

<Text>
Method: {item.method}
</Text>

<Text>
Status: {item.status}
</Text>

</View>

)}
/>

)}

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"hsl(0, 0%, 90%)"
},

header:{
flexDirection:"row",
alignItems:"center",
padding:15,
backgroundColor:"#fff",
gap:10,
borderBottomWidth:1,
borderColor:"#ddd"
},

title:{
fontSize:18,
fontWeight:"bold"
},

noDataContainer:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

image:{
width:260,
height:260,
resizeMode:"contain"
},

noDataText:{
fontSize:20,
fontWeight:"bold",
marginTop:10
},

card:{
backgroundColor:"#fff",
margin:10,
padding:15,
borderRadius:10,
elevation:3
},

amount:{
fontSize:18,
fontWeight:"bold",
marginBottom:5
}

});