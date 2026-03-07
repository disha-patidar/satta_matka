import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useState, useRef } from "react";

import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "../services/api";


const { width } = Dimensions.get("window");

export default function SetPin() {

  const [pin, setPin] = useState(["", "", "", ""]);
 const inputs = useRef<Array<TextInput | null>>([]);
const handleChange = (text: string, index: number) => {
 
    const newPin = [...pin];
    newPin[index] = text;
    setPin(newPin);

    if (text && index < 3) {
      inputs.current[index + 1]?.focus();
    }
  };

 const savePin = async () => {

  const finalPin = pin.join("");

  if (finalPin.length !== 4) {
    alert("PIN must be 4 digits");
    return;
  }

  try {

  const user = await AsyncStorage.getItem("user");

  if (!user) {
    console.log("User not found");
    return;
  }

  const parsedUser = JSON.parse(user);

  const res = await API.post("/setpin", {
    phone: parsedUser.phone,
    mpin: finalPin
  });

  if(res.data.success){
    router.replace("/mpin");
  }

} catch(error){
  console.log(error);
}

};
  return (

    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Create MPIN</Text>
        <Text style={styles.subtitle}>Enter a secure 4 digit PIN</Text>

        <View style={styles.pinContainer}>

          {pin.map((digit, index) => (
            <TextInput
              key={index}
              ref={(ref) => {
                if (ref) inputs.current[index] = ref;
              }}
              style={styles.pinBox}
              keyboardType="number-pad"
              maxLength={1}
              secureTextEntry
              value={digit}
              onChangeText={(text) => handleChange(text, index)}
            />
          ))}

        </View>

        <TouchableOpacity style={styles.button} onPress={savePin}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
    paddingHorizontal: 20
  },

  card: {
    width: "100%",
    maxWidth: 380,
    backgroundColor: "#fff",
    paddingVertical: 40,
    paddingHorizontal: 25,
    borderRadius: 18,
    alignItems: "center",

    shadowColor: "#000",
    shadowOpacity: 0.12,
    shadowRadius: 12,
    elevation: 8
  },

  title: {
    fontSize: 26,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#333"
  },

  subtitle: {
    fontSize: 15,
    color: "#777",
    marginBottom: 30
  },

  pinContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "90%",
    marginBottom: 30
  },

  pinBox: {
    width: width * 0.15,
    height: width * 0.15,
    maxWidth: 60,
    maxHeight: 60,
    borderWidth: 1,
    borderColor: "#ddd",
    borderRadius: 12,
    textAlign: "center",
    fontSize: 22,
    backgroundColor: "#fafafa"
  },

  button: {
    backgroundColor: "#f4a623",
    width: "100%",
    height: 55,
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center"
  },

  buttonText: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "600"
  }

});