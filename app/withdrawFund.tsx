import React, { useState } from "react"; import { View, Text, StyleSheet, TextInput, TouchableOpacity, ScrollView, Image } from "react-native"; import axios from "axios";
export default function WithdrawFund(){

const [method,setMethod] = useState("");
const [amount,setAmount] = useState("");
const [upiNumber,setUpiNumber] = useState("");

const [bankName,setBankName] = useState("");
const [accountHolder,setAccountHolder] = useState("");
const [accountNumber,setAccountNumber] = useState("");
const [ifsc,setIfsc] = useState("");

const user = {
id:"123",
username:"disha"
};

const submitWithdraw = async () => {

try{

if(!amount){
alert("Enter amount");
return;
}

if(!method){
alert("Select withdraw method");
return;
}

const withdrawData = {

userId:user.id,
username:user.username,

amount:amount,
method:method,

upiNumber:upiNumber || "",

bankName:bankName || "",
accountHolder:accountHolder || "",
accountNumber:accountNumber || "",
ifsc:ifsc || ""

};

await axios.post(
"http://192.168.29.199:2000/api/wallet/withdrawFund",
withdrawData
);

alert("Withdraw request submitted");

}catch(err){
console.log(err);
alert("Error submitting request");
}

};

return(

<ScrollView style={styles.container}>

{/* WhatsApp Card */}

<View style={styles.infoCard}>

<Text style={styles.infoText}>
All withdraw related queries
</Text>

<Text style={styles.infoText}>
WhatsApp call
</Text>

<Text style={styles.phone}>
+91 9407242392
</Text>

</View>


{/* Google Pay */}

<TouchableOpacity
style={styles.methodCard}
onPress={()=>setMethod("gpay")}
>

<View style={styles.left}>

<Image
source={require("../assets/images/icons8-google-pay-48.png")}
style={styles.icon}
/>

<View>

<Text style={styles.title}>Google Pay</Text>

<Text style={styles.desc}>
Manual approve by Admin
</Text>

</View>

</View>

<View style={styles.radio}>
{method==="gpay" && <View style={styles.radioInner}/>}
</View>

</TouchableOpacity>


{/* PhonePe */}

<TouchableOpacity
style={styles.methodCard}
onPress={()=>setMethod("phonepe")}
>

<View style={styles.left}>

<Image
source={require("../assets/images/icons8-phone-pe-48.png")}
style={styles.icon}
/>

<View>

<Text style={styles.title}>PhonePe</Text>

<Text style={styles.desc}>
Manual approve by Admin
</Text>

</View>

</View>

<View style={styles.radio}>
{method==="phonepe" && <View style={styles.radioInner}/>}
</View>

</TouchableOpacity>


{/* Paytm */}

<TouchableOpacity
style={styles.methodCard}
onPress={()=>setMethod("paytm")}
>

<View style={styles.left}>

<Image
source={require("../assets/images/icons8-paytm-48.png")}
style={styles.icon}
/>

<View>

<Text style={styles.title}>Paytm</Text>

<Text style={styles.desc}>
Manual approve by Admin
</Text>

</View>

</View>

<View style={styles.radio}>
{method==="paytm" && <View style={styles.radioInner}/>}
</View>

</TouchableOpacity>


{/* Bank Account */}

<TouchableOpacity
style={styles.methodCard}
onPress={()=>setMethod("bank")}
>

<View style={styles.left}>

<Image
source={require("../assets/images/icons8-bank-48.png")}
style={styles.icon}
/>

<View>

<Text style={styles.title}>Bank Account</Text>

<Text style={styles.desc}>
Manual approve by Admin
</Text>

</View>

</View>

<View style={styles.radio}>
{method==="bank" && <View style={styles.radioInner}/>}
</View>

</TouchableOpacity>


{/* Amount */}

<TextInput
placeholder="Enter Amount"
value={amount}
onChangeText={setAmount}
keyboardType="numeric"
style={styles.input}
/>


{/* Dynamic Inputs */}

{method === "gpay" && (

<TextInput
placeholder="Enter Google Pay Number"
style={styles.input}
/>

)}

{method === "phonepe" && (

<TextInput
placeholder="Enter PhonePe Number"
style={styles.input}
/>

)}

{method === "paytm" && (

<TextInput
placeholder="Enter Paytm Number"
style={styles.input}
/>

)}

{method === "bank" && (

<View>

<TextInput
placeholder="Bank Name"
style={styles.input}
/>

<TextInput
placeholder="Account Holder Name"
style={styles.input}
/>

<TextInput
placeholder="Account Number"
style={styles.input}
/>

<TextInput
placeholder="IFSC Code"
style={styles.input}
/>

</View>

)}


{/* Submit */}

<TouchableOpacity style={styles.button} onPress={submitWithdraw}>

<Text style={styles.btnText}>
SUBMIT
</Text>

</TouchableOpacity>


{/* Footer */}

<View style={styles.footer}>

<Text style={styles.footerText}>
For withdraw related query’s call or WhatsApp
</Text>

<Text style={styles.footerText}>
Monday To Sunday (Timing 7:30 AM To 9:30 AM)
</Text>

</View>

</ScrollView>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f3f3",
padding:15
},

infoCard:{
backgroundColor:"#fff",
padding:20,
borderRadius:10,
alignItems:"center",
marginBottom:15,
elevation:3
},

infoText:{
fontSize:16
},

phone:{
fontSize:20,
fontWeight:"bold",
color:"green",
marginTop:5
},

methodCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
flexDirection:"row",
justifyContent:"space-between",
alignItems:"center",
marginBottom:10,
borderWidth:1,
borderColor:"#ccc"
},

left:{
flexDirection:"row",
alignItems:"center"
},

icon:{
width:30,
height:30,
marginRight:10,
resizeMode:"contain"
},

title:{
fontSize:16,
fontWeight:"bold"
},

desc:{
fontSize:12,
color:"#777"
},

radio:{
width:20,
height:20,
borderRadius:10,
borderWidth:2,
borderColor:"#f6a623",
alignItems:"center",
justifyContent:"center"
},

radioInner:{
width:10,
height:10,
borderRadius:5,
backgroundColor:"#f6a623"
},

input:{
borderWidth:1,
borderColor:"#ccc",
borderRadius:8,
padding:15,
marginTop:10,
backgroundColor:"#fff"
},

button:{
backgroundColor:"#f6a623",
padding:15,
borderRadius:8,
marginTop:15,
alignItems:"center"
},

btnText:{
color:"#fff",
fontWeight:"bold"
},

footer:{
backgroundColor:"#fff",
padding:15,
marginTop:20,
borderRadius:10
},

footerText:{
textAlign:"center",
marginBottom:5
}

});