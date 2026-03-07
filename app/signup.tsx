import { View, Text, TextInput, TouchableOpacity, StyleSheet } from "react-native";
import { useState } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";
import API from "../services/api";

export default function Signup() {

  const [name,setName] = useState("");
  const [phone,setPhone] = useState("");
const [phoneError, setPhoneError] = useState(false);
  const handleSignup = async () => {
     if (!name || !phone) {
    alert("Please enter name and phone number");
    return;
  }

  const phoneRegex = /^[0-9]{10}$/;

  if (!phoneRegex.test(phone)) {
    alert("Enter valid 10 digit phone number");
    return;
  }

    try {

      const res = await API.post("/signup", {
        name,
        phone
      });

      if(res.data.success){

        const user = { name, phone };

        await AsyncStorage.setItem("user", JSON.stringify(user));

        router.push("/setpin");

      }

    } catch(err){
      console.log(err);
    }
  };


  return (
    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Create Account</Text>

        <TextInput
          placeholder="Enter Name"
          value={name}
          onChangeText={setName}
          style={styles.input}
        />
{/* 
        <TextInput
          placeholder="Enter Phone Number"
          keyboardType="number-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        /> */}
<TextInput
  placeholder="Enter Phone Number"
  keyboardType="numeric"
  maxLength={10}
  value={phone}
  onChangeText={(text) => setPhone(text.replace(/[^0-9]/g, ""))}
  style={[
    styles.input,
    phoneError ? { borderColor: "red", borderWidth: 2 } : {}
  ]}
/>

{phoneError && (
  <Text style={styles.error}>Please enter correct number</Text>
)}
        <TouchableOpacity style={styles.button} onPress={handleSignup}>
          <Text style={styles.buttonText}>Continue</Text>
        </TouchableOpacity>

      </View>

    </View>
  );
}
const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f5f5f5",
    paddingHorizontal:20
  },
  error: {
  color: "red",
  marginTop: 5,
  fontSize: 12
},

  card:{
    width:"100%",
    maxWidth:380,
    backgroundColor:"#fff",
    paddingVertical:40,
    paddingHorizontal:25,
    borderRadius:18,

    shadowColor:"#000",
    shadowOpacity:0.1,
    shadowRadius:12,
    elevation:8
  },

  title:{
    fontSize:28,
    fontWeight:"bold",
    marginBottom:35,
    textAlign:"center",
    color:"#333"
  },

  input:{
    height:55,
    borderWidth:1,
    borderColor:"#e5e5e5",
    borderRadius:12,
    paddingHorizontal:16,
    marginBottom:20,
    fontSize:16,
    backgroundColor:"#fafafa"
  },

  button:{
    backgroundColor:"#f4a623",
    height:55,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center",
    marginTop:10
  },

  buttonText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"600"
  }

});