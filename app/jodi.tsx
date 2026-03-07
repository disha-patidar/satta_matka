import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  Alert
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams, useRouter } from "expo-router";

export default function JodiScreen() {
  const router = useRouter();
  const { gameName } = useLocalSearchParams(); // dynamic game name

  const [digit, setDigit] = useState("");
  const [amount, setAmount] = useState("");
  const [bids, setBids] = useState<
    { digit: string; amount: string; gameType: string }[]
  >([]);

  const addBid = () => {
    if (!digit || !amount) {
      Alert.alert("Error", "Please enter digit and amount");
      return;
    }

    if (digit.length !== 2) {
      Alert.alert("Error", "Enter valid Jodi (00-99)");
      return;
    }

    const newBid = {
      digit,
      amount,
      gameType: "Jodi"
    };

    setBids([...bids, newBid]);
    setDigit("");
    setAmount("");
  };

  return (
    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          {gameName ? `${gameName} JODI` : "JODI"}
        </Text>

        <View style={styles.wallet}>
          <Ionicons name="wallet-outline" size={22} />
          <Text style={{ marginLeft: 5 }}>5</Text>
        </View>
      </View>

      {/* ENTER POINTS */}
      <View style={styles.rowInput}>
        <Text style={styles.label}>Enter Points:</Text>

        <TextInput
          style={styles.input}
          placeholder="Enter Amount"
          keyboardType="numeric"
          value={amount}
          onChangeText={setAmount}
        />
      </View>

      {/* ENTER JODI */}
      <View style={styles.rowInput}>
        <Text style={styles.label}>Enter Jodi Digit:</Text>

        <TextInput
          style={styles.input}
          placeholder="Bid Digits"
          keyboardType="numeric"
          maxLength={2}
          value={digit}
          onChangeText={setDigit}
        />
      </View>

      {/* ADD BID */}
      <TouchableOpacity style={styles.addBtn} onPress={addBid}>
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
        <View key={index} style={styles.tableRow}>
          <Text>{item.digit}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.gameType}</Text>
        </View>
      ))}

    </ScrollView>
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

  headerTitle: {
    fontSize: 18,
    fontWeight: "bold"
  },

  wallet: {
    flexDirection: "row",
    alignItems: "center"
  },

  rowInput: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginHorizontal: 15,
    marginTop: 15
  },

  label: {
    fontSize: 16
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    padding: 10,
    borderRadius: 25,
    width: "55%",
    backgroundColor: "white"
  },

  addBtn: {
    backgroundColor: "#f5a623",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center"
  },

  addText: {
    color: "white",
    fontWeight: "bold",
    fontSize: 16
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1,
    borderColor: "#ccc"
  },

  tableText: {
    fontWeight: "bold"
  },

  tableRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee"
  }

});