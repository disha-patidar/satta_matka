import React, { useState } from "react";
import {
View,
Text,
StyleSheet,
TextInput,
TouchableOpacity,
ScrollView,
Image,
Linking
} from "react-native";

export default function AddFund() {

const [amount, setAmount] = useState("");
const [method, setMethod] = useState("");

const quickAmounts = [100,500,1000,2000,5000,10000,20000];

// Your receiving UPI ID
const UPI_ID = "9303677713@ybl";
const NAME = "Disha Patidar";

const selectAmount = (value:number)=>{
setAmount(value.toString());
};

const payNow = async () => {

if(!amount){
alert("Enter amount");
return;
}

if(!method){
alert("Select payment method");
return;
}

let url = "";

// Open PhonePe
if(method === "phonepe"){
url = `phonepe://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR`;
}

// Open Google Pay
if(method === "gpay"){
url = `upi://pay?pa=${UPI_ID}&pn=${NAME}&am=${amount}&cu=INR`;
}

try{

const supported = await Linking.canOpenURL(url);

if(supported){
Linking.openURL(url);
}else{
alert("Payment app not installed");
}

}catch(err){
console.log(err);
}

};

return (

<ScrollView style={styles.container}>

{/* Available Balance */}

<View style={styles.balanceCard}>
<Text style={styles.balanceTitle}>Available Balance</Text>
<Text style={styles.balanceAmount}>₹ 5</Text>
</View>


<Text style={styles.heading}>Add Fund Request</Text>


{/* Amount */}

<Text style={styles.label}>Amount</Text>

<TextInput
placeholder="Amount"
keyboardType="numeric"
value={amount}
onChangeText={setAmount}
style={styles.input}
/>


{/* Quick Amount Buttons */}

<View style={styles.amountGrid}>

{quickAmounts.map((item,index)=>(
<TouchableOpacity
key={index}
style={styles.amountBtn}
onPress={()=>selectAmount(item)}
>
<Text style={styles.amountText}>{item}</Text>
</TouchableOpacity>
))}

<TouchableOpacity style={styles.amountBtn}>
<Text style={styles.amountText}>OTHER</Text>
</TouchableOpacity>

</View>


{/* Google Pay */}

<TouchableOpacity
style={styles.methodCard}
onPress={()=>setMethod("gpay")}
>

<View style={styles.methodLeft}>
<Image
  source={require("../assets/images/icons8-google-pay-48.png")}
  style={styles.icon}
/>
<View>
<Text style={styles.methodTitle}>Google Pay</Text>
<Text style={styles.methodDesc}>Manual approve by Admin</Text>
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

<View style={styles.methodLeft}>
<Image
  source={require("../assets/images/icons8-phone-pe-48.png")}
  style={styles.icon}
/>

<View>
<Text style={styles.methodTitle}>PhonePe</Text>
<Text style={styles.methodDesc}>Manual approve by Admin</Text>
</View>

</View>

<View style={styles.radio}>
{method==="phonepe" && <View style={styles.radioInner}/>}
</View>

</TouchableOpacity>

</ScrollView>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f3f3",
padding:15
},

balanceCard:{
backgroundColor:"#fff",
borderRadius:10,
padding:20,
alignItems:"center",
borderWidth:1,
borderColor:"#ccc",
marginBottom:20
},

balanceTitle:{
fontSize:18,
marginBottom:5
},

balanceAmount:{
fontSize:22,
fontWeight:"bold",
color:"#f6a623"
},

heading:{
fontSize:18,
fontWeight:"bold",
textAlign:"center",
marginBottom:20
},

label:{
fontSize:14,
marginBottom:5
},

input:{
borderWidth:1,
borderColor:"#ccc",
padding:15,
borderRadius:8,
marginBottom:15,
backgroundColor:"#fff"
},

amountGrid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between"
},

amountBtn:{
borderWidth:1,
borderColor:"#f6a623",
borderRadius:8,
paddingVertical:10,
width:"23%",
alignItems:"center",
marginBottom:10,
backgroundColor:"#fff"
},

amountText:{
fontWeight:"bold"
},

methodCard:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
marginTop:15,
borderWidth:1,
borderColor:"#ddd"
},

methodLeft:{
flexDirection:"row",
alignItems:"center"
},

methodTitle:{
fontSize:16,
fontWeight:"bold"
},

methodDesc:{
fontSize:12,
color:"#777"
},

icon:{
width:30,
height:30,
marginRight:10,
resizeMode:"contain"
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
}

});