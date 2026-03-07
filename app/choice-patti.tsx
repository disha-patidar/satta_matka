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
import { useRouter, useLocalSearchParams } from "expo-router";

export default function ChoicePattiScreen() {
  const router = useRouter();
  const { gameName } = useLocalSearchParams();

  const [showDropdown, setShowDropdown] = useState(false);
  const [gameType, setGameType] = useState("");

  const [sp, setSp] = useState(false);
  const [dp, setDp] = useState(false);
  const [tp, setTp] = useState(false);

  const [leftDigit, setLeftDigit] = useState("");
  const [centerDigit, setCenterDigit] = useState("");
  const [rightDigit, setRightDigit] = useState("");
  const [amount, setAmount] = useState("");

  const [bids, setBids] = useState<any[]>([]);

  const addBid = () => {
    if (!amount || !gameType) return;

    const newBid = {
      digit: `${leftDigit}-${centerDigit}-${rightDigit}`,
      amount,
      gameType
    };

    setBids([...bids, newBid]);

    setLeftDigit("");
    setCenterDigit("");
    setRightDigit("");
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
          {gameName} CHOICE PATTI
        </Text>

        <View style={styles.wallet}>
          <Ionicons name="wallet-outline" size={22} />
          <Text style={{ marginLeft: 5 }}>5</Text>
        </View>
      </View>

      {/* DROPDOWN */}
      <Text style={styles.label}>Select Game Type:</Text>

      <TouchableOpacity
        style={styles.input}
        onPress={() => setShowDropdown(!showDropdown)}
      >
        <Text>{gameType ? gameType : "Select Game Type"}</Text>
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

      {/* SP DP TP MULTI SELECT */}
      <View style={styles.checkboxRow}>
        <TouchableOpacity onPress={() => setSp(!sp)} style={styles.checkboxBox}>
          <View style={[styles.checkbox, sp && styles.checked]} />
          <Text>SP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setDp(!dp)} style={styles.checkboxBox}>
          <View style={[styles.checkbox, dp && styles.checked]} />
          <Text>DP</Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={() => setTp(!tp)} style={styles.checkboxBox}>
          <View style={[styles.checkbox, tp && styles.checked]} />
          <Text>TP</Text>
        </TouchableOpacity>
      </View>

      {/* DIGIT FIELDS */}
      <View style={styles.digitRow}>
        <TextInput
          style={styles.digitInput}
          placeholder="Left Digit"
          keyboardType="numeric"
          value={leftDigit}
          onChangeText={setLeftDigit}
        />

        <TextInput
          style={styles.digitInput}
          placeholder="Center Digit"
          keyboardType="numeric"
          value={centerDigit}
          onChangeText={setCenterDigit}
        />

        <TextInput
          style={styles.digitInput}
          placeholder="Right Digit"
          keyboardType="numeric"
          value={rightDigit}
          onChangeText={setRightDigit}
        />
      </View>

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
      <TouchableOpacity style={styles.addBtn} onPress={addBid}>
        <Text style={styles.addText}>ADD BID</Text>
      </TouchableOpacity>

      {/* TABLE HEADER */}
      <View style={styles.tableHeader}>
        <Text>Digit</Text>
        <Text>Amount</Text>
        <Text>Game Type</Text>
      </View>

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
  container: { flex: 1, backgroundColor: "#f2f2f2" },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    backgroundColor: "white"
  },

  headerTitle: { fontSize: 18, fontWeight: "bold" },

  wallet: { flexDirection: "row", alignItems: "center" },

  label: { marginTop: 15, marginHorizontal: 15, fontSize: 16 },

  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    marginHorizontal: 15,
    marginTop: 5,
    padding: 12,
    borderRadius: 25,
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

  checkboxRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15
  },

  checkboxBox: {
    flexDirection: "row",
    alignItems: "center"
  },

  checkbox: {
    width: 20,
    height: 20,
    borderWidth: 2,
    marginRight: 6
  },

  checked: {
    backgroundColor: "#f5a623"
  },

  digitRow: {
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: 15
  },

  digitInput: {
    borderWidth: 1,
    borderRadius: 20,
    padding: 10,
    width: "28%",
    textAlign: "center",
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
    fontWeight: "bold"
  },

  tableHeader: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 10,
    borderBottomWidth: 1
  },

  row: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 12,
    borderBottomWidth: 1,
    borderColor: "#eee"
  }
});