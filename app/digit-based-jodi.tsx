import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";

export default function Jodi() {
  const router = useRouter();
  const { gameName } = useLocalSearchParams();

  const [leftDigit, setLeftDigit] = useState("");
  const [rightDigit, setRightDigit] = useState("");
  const [amount, setAmount] = useState("");

  const [bids, setBids] = useState<any[]>([]);

  const addBid = () => {
    if (!leftDigit || !rightDigit || !amount) return;

    const digit = leftDigit + rightDigit;

    const newBid = {
      digit,
      amount,
      gameType: "Jodi",
    };

    setBids([...bids, newBid]);

    setLeftDigit("");
    setRightDigit("");
    setAmount("");
  };

  return (
    <View style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.title}>{gameName} JODI</Text>

        <View style={styles.wallet}>
          <Ionicons name="wallet-outline" size={22} />
          <Text style={{ marginLeft: 5 }}>5</Text>
        </View>
      </View>

      {/* DIGIT INPUTS */}
      <View style={styles.row}>
        <TextInput
          placeholder="Left Digit"
          style={styles.input}
          keyboardType="numeric"
          value={leftDigit}
          onChangeText={setLeftDigit}
          maxLength={1}
        />

        <TextInput
          placeholder="Right Digit"
          style={styles.input}
          keyboardType="numeric"
          value={rightDigit}
          onChangeText={setRightDigit}
          maxLength={1}
        />
      </View>

      {/* POINTS */}
      <Text style={styles.label}>Enter Points:</Text>

      <TextInput
        placeholder="Enter Amount"
        style={styles.amountInput}
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* ADD BUTTON */}
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
          <View style={styles.rowData}>
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
    backgroundColor: "#f2f2f2",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white",
  },

  title: {
    fontSize: 18,
    fontWeight: "bold",
  },

  wallet: {
    flexDirection: "row",
    alignItems: "center",
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginHorizontal: 15,
    marginTop: 20,
  },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 12,
    width: "48%",
    backgroundColor: "white",
  },

  label: {
    marginLeft: 15,
    marginTop: 20,
    fontSize: 16,
  },

  amountInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 25,
    padding: 12,
    marginHorizontal: 15,
    marginTop: 8,
    backgroundColor: "white",
  },

  button: {
    backgroundColor: "#f5a623",
    margin: 15,
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },

  buttonText: {
    color: "white",
    fontWeight: "bold",
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    borderTopWidth: 1,
    padding: 10,
  },

  rowData: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee",
  },
});