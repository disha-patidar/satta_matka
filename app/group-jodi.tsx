import { View,Text,TextInput,TouchableOpacity,StyleSheet } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { useRouter,useLocalSearchParams } from "expo-router";

export default function JodiSimple(){

const router = useRouter();
const {gameName} = useLocalSearchParams();

const [digit,setDigit] = useState("");
const [amount,setAmount] = useState("");

return(

<View style={styles.container}>

<View style={styles.header}>

<TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="arrow-back" size={24}/>
</TouchableOpacity>

<Text style={styles.title}>
{gameName} JODI
</Text>

<View style={styles.wallet}>
<Ionicons name="wallet-outline" size={22}/>
<Text style={{marginLeft:5}}>5</Text>
</View>

</View>

<Text style={styles.label}>Enter Single Digit:</Text>

<TextInput
style={styles.input}
placeholder="Bid Digits"
value={digit}
onChangeText={setDigit}
keyboardType="numeric"
/>

<Text style={styles.label}>Enter Points:</Text>

<TextInput
style={styles.input}
placeholder="Enter Amount"
value={amount}
onChangeText={setAmount}
keyboardType="numeric"
/>

<TouchableOpacity style={styles.addBtn}>
<Text style={styles.btnText}>ADD BID</Text>
</TouchableOpacity>

<View style={styles.tableHeader}>
<Text>Digit</Text>
<Text>Amount</Text>
<Text>Game Type</Text>
</View>

</View>

)

}

const styles = StyleSheet.create({

container:{flex:1,backgroundColor:"#f2f2f2"},

header:{
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
padding:15,
backgroundColor:"white"
},

title:{fontSize:18,fontWeight:"bold"},

wallet:{flexDirection:"row",alignItems:"center"},

label:{
marginHorizontal:20,
marginTop:20
},

input:{
borderWidth:1,
borderColor:"#ccc",
borderRadius:25,
marginHorizontal:20,
marginTop:8,
padding:14,
backgroundColor:"white"
},

addBtn:{
backgroundColor:"#f5a623",
margin:20,
padding:15,
borderRadius:10,
alignItems:"center"
},

btnText:{color:"white",fontWeight:"bold"},

tableHeader:{
flexDirection:"row",
justifyContent:"space-around",
borderTopWidth:1,
padding:10
}

})