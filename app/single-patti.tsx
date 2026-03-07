import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function SinglePatti() {

  const router = useRouter();
  const { gameName } = useLocalSearchParams();

  const [digit,setDigit] = useState("");
  const [amount,setAmount] = useState("");
  const [gameType,setGameType] = useState("Open");
const [showDropdown,setShowDropdown] = useState(false);
  const [bids,setBids] = useState<any[]>([]);

const addBid = () => {

  if (!digit || !amount) return;

  // check if exactly 3 digits
  if (!/^\d{3}$/.test(digit)) {
    alert("Patti must be exactly 3 digits");
    return;
  }

  const newBid = {
    digit,
    amount,
    gameType
  };

  setBids([...bids, newBid]);

  setDigit("");
  setAmount("");
};
  return(

    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity onPress={()=>router.back()}>
          <Ionicons name="arrow-back" size={24}/>
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {gameName} SINGLE PATTI
        </Text>

        <View style={styles.wallet}>
          <Ionicons name="wallet-outline" size={22}/>
          <Text style={{marginLeft:5}}>5</Text>
        </View>

      </View>

      {/* GAME TYPE */}
      {/* <Text style={styles.label}>Select Game Type:</Text>

      <TouchableOpacity style={styles.input}>
        <Text>{gameType}</Text>
      </TouchableOpacity> */}
<Text style={styles.label}>Select Game Type:</Text>

<TouchableOpacity
  style={styles.input}
  onPress={()=>setShowDropdown(!showDropdown)}
>
  <Text>
    {gameType ? gameType : "Select Game Type"}
  </Text>
</TouchableOpacity>

{showDropdown && (

<View style={styles.dropdown}>

<TouchableOpacity
style={styles.dropdownItem}
onPress={()=>{
setGameType("Open");
setShowDropdown(false);
}}
>
<Text>Open</Text>
</TouchableOpacity>

<TouchableOpacity
style={styles.dropdownItem}
onPress={()=>{
setGameType("Close");
setShowDropdown(false);
}}
>
<Text>Close</Text>
</TouchableOpacity>

</View>

)}
      {/* DIGIT */}
      <Text style={styles.label}>Enter Three Digit:</Text>

      <TextInput
        style={styles.input}
        placeholder="Bid Digits"
        keyboardType="numeric"
        value={digit}
        onChangeText={setDigit}
          maxLength={3}
      />

      {/* AMOUNT */}
      <Text style={styles.label}>Enter Points:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* ADD BID */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={addBid}
      >
        <Text style={styles.addText}>ADD BID</Text>
      </TouchableOpacity>

      {/* TABLE */}
      <View style={styles.tableHeader}>
        <Text>Digit</Text>
        <Text>Amount</Text>
        <Text>Game Type</Text>
      </View>

      {bids.map((item,index)=>(
        <View key={index} style={styles.row}>
          <Text>{item.digit}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.gameType}</Text>
        </View>
      ))}

    </ScrollView>
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

headerTitle:{fontSize:18,fontWeight:"bold"},

wallet:{flexDirection:"row",alignItems:"center"},

label:{marginTop:15,marginHorizontal:15,fontSize:16},

input:{
borderWidth:1,
borderColor:"#ccc",
marginHorizontal:15,
marginTop:5,
padding:12,
borderRadius:25,
backgroundColor:"white"
},

addBtn:{
backgroundColor:"#f5a623",
margin:15,
padding:15,
borderRadius:10,
alignItems:"center"
},

addText:{color:"white",fontWeight:"bold"},

tableHeader:{
flexDirection:"row",
justifyContent:"space-around",
padding:10,
borderBottomWidth:1
},

row:{
flexDirection:"row",
justifyContent:"space-around",
padding:12,
borderBottomWidth:1,
borderColor:"#eee"
},
dropdown:{
backgroundColor:"white",
marginHorizontal:15,
borderRadius:10,
borderWidth:1,
borderColor:"#ccc"
},

dropdownItem:{
padding:12,
borderBottomWidth:1,
borderColor:"#eee"
}
});