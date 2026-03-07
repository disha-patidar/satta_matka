import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function SinglePatti() {

  const router = useRouter();
  const { gameName } = useLocalSearchParams();

  const [gameType, setGameType] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);

  const [digit, setDigit] = useState("");
  const [amount, setAmount] = useState("");

  const [bids, setBids] = useState<any[]>([]);

  const addBid = () => {

    if (!digit || !amount || !gameType) return;

    const newBid = {
      digit,
      amount,
      gameType
    };

    setBids([...bids, newBid]);

    setDigit("");
    setAmount("");
  };

  return (

    <View style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>
          {gameName} SINGLE PATTI
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
        <Text>{gameType || "Select Game Type"}</Text>
      </TouchableOpacity>

      {showDropdown && (

        <View style={styles.dropdown}>

          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setGameType("Open");
              setShowDropdown(false);
            }}
          >
            <Text>Open</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={() => {
              setGameType("Close");
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
        placeholder="Bid Digits"
        keyboardType="numeric"
        value={digit}
        onChangeText={setDigit}
      />


      {/* POINTS */}
      <Text style={styles.label}>Enter Points:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />


      {/* ADD BID */}
      <TouchableOpacity style={styles.button} onPress={addBid}>
        <Text style={styles.buttonText}>ADD BID</Text>
      </TouchableOpacity>


      {/* TABLE HEADER */}
      <View style={styles.tableHeader}>
        <Text>Digit</Text>
        <Text>Amount</Text>
        <Text>Game Type</Text>
      </View>


      {/* BID LIST */}
      <FlatList
        data={bids}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (

          <View style={styles.row}>
            <Text>{item.digit}</Text>
            <Text>{item.amount}</Text>
            <Text>{item.gameType}</Text>
          </View>

        )}
      />

    </View>
  );
}


const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: "#f2f2f2"
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white"
  },

  title: {
    fontSize: 18,
    fontWeight: "bold"
  },

  wallet: {
    flexDirection: "row",
    alignItems: "center"
  },

  label: {
    marginLeft: 15,
    marginTop: 15,
    fontSize: 16
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 12,
    marginHorizontal: 15,
    marginTop: 5,
    backgroundColor: "white"
  },

  dropdown: {
    backgroundColor: "white",
    marginHorizontal: 15,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#ccc"
  },

  dropdownItem: {
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee"
  },

  button: {
    backgroundColor: "#f5a623",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  buttonText: {
    color: "white",
    fontWeight: "bold"
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    padding: 10
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee"
  }

});