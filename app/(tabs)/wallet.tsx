// import React from "react";
// import {
// View,
// Text,
// StyleSheet,
// TouchableOpacity,
// SafeAreaView,
// ScrollView
// } from "react-native";
// import { Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";

// export default function FundsScreen() {

// const menu = [
// {
// title: "Add Fund",
// desc: "You can add fund to your wallet",
// icon: "plus-circle-outline"
// },
// {
// title: "Withdraw Fund",
// desc: "You can withdraw winnings",
// icon: "bank-transfer-out"
// },
// {
// title: "Add Bank Details",
// desc: "You can add your bank details",
// icon: "bank-outline"
// },
// {
// title: "Fund Deposit History",
// desc: "You can see history of your deposit fund",
// icon: "history"
// },
// {
// title: "Withdraw Fund History",
// desc: "You can see history of your withdrawals fund",
// icon: "file-document-outline"
// }
// ];

// return (

// <SafeAreaView style={styles.container}>

// {/* Header */}

// <View style={styles.header}>

// <Ionicons name="arrow-back" size={24} />

// <Text style={styles.headerTitle}>Funds</Text>

// <View style={styles.wallet}>

// <Ionicons name="wallet-outline" size={24} />
// <Text style={styles.balance}>5</Text>

// </View>

// </View>

// <ScrollView>

// {menu.map((item,index)=>(

// <TouchableOpacity key={index} style={styles.card}>

// <View style={styles.left}>

// <MaterialCommunityIcons
// name={item.icon}
// size={28}
// />

// <View style={{marginLeft:12}}>

// <Text style={styles.title}>
// {item.title}
// </Text>

// <Text style={styles.desc}>
// {item.desc}
// </Text>

// </View>

// </View>

// <Ionicons
// name="arrow-forward-circle"
// size={28}
// color="#f6a623"
// />

// </TouchableOpacity>

// ))}

// </ScrollView>

// </SafeAreaView>

// );
// }

// const styles = StyleSheet.create({

// container:{
// flex:1,
// backgroundColor:"#f3f3f3"
// },

// header:{
// flexDirection:"row",
// alignItems:"center",
// justifyContent:"space-between",
// padding:15,
// backgroundColor:"#fff"
// },

// headerTitle:{
// fontSize:20,
// fontWeight:"bold"
// },

// wallet:{
// flexDirection:"row",
// alignItems:"center"
// },

// balance:{
// marginLeft:5,
// fontWeight:"bold",
// fontSize:16
// },

// card:{
// backgroundColor:"#fff",
// marginHorizontal:15,
// marginVertical:10,
// padding:15,
// borderRadius:12,
// flexDirection:"row",
// alignItems:"center",
// justifyContent:"space-between",
// elevation:3
// },

// left:{
// flexDirection:"row",
// alignItems:"center"
// },

// title:{
// fontWeight:"bold",
// fontSize:16
// },

// desc:{
// color:"#666",
// marginTop:2
// }

// });


import React, { useState, useEffect } from "react";
import axios from "axios";
import {
View,
Text,
StyleSheet,
TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";




export default function WalletPage(){
const router = useRouter();
const [balance,setBalance] = useState(0);

useEffect(()=>{
fetchBalance();
},[]);

const fetchBalance = async ()=>{

try{

const res = await axios.get(
"https://satka-matka.onrender.com/api/wallet/balance/123"
);

setBalance(res.data.balance);

}catch(err){
console.log(err);
}

};


return(

<View style={styles.container}>

<Text style={styles.title}>
Funds
</Text>


{/* Add Fund */}

<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/addFund")}
>

<Ionicons name="add-circle-outline" size={30}/>

<View style={styles.textContainer}>

<Text style={styles.heading}>
Add Fund
</Text>

<Text style={styles.subText}>
You can add fund to your wallet
</Text>

</View>

<Ionicons name="chevron-forward" size={24}/>

</TouchableOpacity>


{/* Withdraw Fund */}

<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/withdrawFund")}
>

<Ionicons name="arrow-down-circle-outline" size={30}/>

<View style={styles.textContainer}>

<Text style={styles.heading}>
Withdraw Fund
</Text>

<Text style={styles.subText}>
You can withdraw winnings
</Text>

</View>

<Ionicons name="chevron-forward" size={24}/>

</TouchableOpacity>


{/* Deposit History */}

<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/depositHistory")}
>

<Ionicons name="time-outline" size={30}/>

<View style={styles.textContainer}>

<Text style={styles.heading}>
Fund Deposit History
</Text>

<Text style={styles.subText}>
You can see history of your deposit fund
</Text>

</View>

<Ionicons name="chevron-forward" size={24}/>

</TouchableOpacity>


{/* Withdraw Requests */}

<TouchableOpacity
style={styles.card}
onPress={()=>router.push("/withdrawRequests")}
>

<Ionicons name="document-text-outline" size={30}/>

<View style={styles.textContainer}>

<Text style={styles.heading}>
Withdraw Fund History
</Text>

<Text style={styles.subText}>
You can see history of your withdrawals
</Text>

</View>

<Ionicons name="chevron-forward" size={24}/>

</TouchableOpacity>


</View>

)

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f5f5",
padding:15
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:20
},

card:{
backgroundColor:"#fff",
padding:15,
borderRadius:10,
flexDirection:"row",
alignItems:"center",
marginBottom:15,
justifyContent:"space-between"
},

textContainer:{
flex:1,
marginLeft:10
},

heading:{
fontSize:16,
fontWeight:"bold"
},

subText:{
fontSize:13,
color:"#666"
}

});