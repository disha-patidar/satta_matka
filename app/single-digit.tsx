
import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SingleDigitScreen() {

  const [digit, setDigit] = useState("");
  const [amount, setAmount] = useState("");
  const [gameType, setGameType] = useState("Open");
const [showDropdown, setShowDropdown] = useState(false);
 const [session, setSession] = useState("open");
  const [bids, setBids] = useState<any[]>([]);

  const addBid = async () => {

    if (!digit || !amount) {
      alert("Enter digit and amount");
      return;
    }

    try {

      const res = await fetch("http://localhost:2000/api/bid/single-digit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          digit: Number(digit),
          amount: Number(amount),
          session
        })
      });

      const data = await res.json();

      setBids([...bids, data.bid]);

      setDigit("");
      setAmount("");

    } catch (error) {
      console.log(error);
    }
  };

  return (

    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          SINGLE DIGIT
        </Text>

        <View style={styles.wallet}>
          <Ionicons name="wallet-outline" size={22} />
          <Text style={{ marginLeft: 5 }}>5</Text>
        </View>

      </View>

      {/* GAME TYPE */}
     <Text style={styles.label}>Select Game Type:</Text>

<TouchableOpacity
  style={styles.input}
  onPress={() => setShowDropdown(!showDropdown)}
>
  <Text>{gameType}</Text>
</TouchableOpacity>

{showDropdown && (
  <View style={styles.dropdown}>

    <TouchableOpacity
      style={styles.dropdownItem}
      onPress={() => {
  setGameType("Open");
  setSession("open");
  setShowDropdown(false);
}}
    >
      <Text>Open</Text>
    </TouchableOpacity>

    <TouchableOpacity
      style={styles.dropdownItem}
     onPress={() => {
  setGameType("Close");
  setSession("close");
  setShowDropdown(false);
}}
    >
      <Text>Close</Text>
    </TouchableOpacity>
    </View>
)}
      {/* DIGIT */}
      <Text style={styles.label}>Enter Single Digit:</Text>

      <TextInput
        style={styles.input}
        placeholder="Bid Digit"
        keyboardType="numeric"
        maxLength={1}
        value={digit}
        onChangeText={setDigit}
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

      {/* ADD BID BUTTON */}
      <TouchableOpacity
        style={styles.addBtn}
        onPress={addBid}
      >
        <Text style={styles.addText}>ADD BID</Text>
      </TouchableOpacity>

      {/* TABLE HEADER */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableText}>Digit</Text>
        <Text style={styles.tableText}>Amount</Text>
        <Text style={styles.tableText}>Game Type</Text>
      </View>

      {/* BID LIST */}
      {bids.map((item, index) => (

        <View key={index} style={styles.row}>
          <Text>{item.digit}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.gameType}</Text>
        </View>

      ))}

    </ScrollView>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f2f2f2"
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:15,
    backgroundColor:"white"
  },

  headerTitle:{
    fontSize:18,
    fontWeight:"bold"
  },

  wallet:{
    flexDirection:"row",
    alignItems:"center"
  },

  label:{
    marginTop:15,
    marginHorizontal:15,
    fontSize:16
  },

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

  addText:{
    color:"white",
    fontWeight:"bold",
    fontSize:16
  },

  tableHeader:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10,
    borderBottomWidth:1,
    borderColor:"#ccc"
  },

  tableText:{
    fontWeight:"bold"
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