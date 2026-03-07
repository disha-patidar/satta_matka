import { View, Text, TextInput, TouchableOpacity, StyleSheet, Dimensions } from "react-native";
import { useState, useRef } from "react";
import { router } from "expo-router";
import API from "../services/api";

const { width } = Dimensions.get("window");

export default function ForgotMpin() {

  const [phone, setPhone] = useState("");
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

  const resetPin = async () => {

    const finalPin = pin.join("");

    if(finalPin.length !== 4){
      alert("Enter 4 digit MPIN");
      return;
    }
const phoneRegex = /^[0-9]{10}$/;

if (!phoneRegex.test(phone)) {
  alert("Invalid phone number. Enter 10 digits only.");
  return;
}
    try {

      const res = await API.post("/forgot-mpin",{
        phone,
        mpin: finalPin
      });

      if(res.data.success){
        alert("MPIN Reset Successful");
        router.replace("/mpin");
      }

    } catch(err){
      console.log(err);
    }

  };

  return (

    <View style={styles.container}>

      <View style={styles.card}>

        <Text style={styles.title}>Reset MPIN</Text>

        <TextInput
          placeholder="Enter Phone Number"
          keyboardType="number-pad"
          value={phone}
          onChangeText={setPhone}
          style={styles.input}
        />

        <View style={styles.pinContainer}>

          {pin.map((digit,index)=>(
            <TextInput
              key={index}
             ref={(ref) => {
  inputs.current[index] = ref;
}}
              style={styles.pinBox}
              keyboardType="number-pad"
              maxLength={1}
              secureTextEntry
              value={digit}
              onChangeText={(text)=>handleChange(text,index)}
            />
          ))}

        </View>

        <TouchableOpacity style={styles.button} onPress={resetPin}>
          <Text style={styles.buttonText}>Reset MPIN</Text>
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

  card:{
    width:"100%",
    maxWidth:380,
    backgroundColor:"#fff",
    paddingVertical:40,
    paddingHorizontal:25,
    borderRadius:18,
    alignItems:"center",

    shadowColor:"#000",
    shadowOpacity:0.12,
    shadowRadius:12,
    elevation:8
  },

  title:{
    fontSize:26,
    fontWeight:"bold",
    marginBottom:25
  },

  input:{
    width:"100%",
    height:55,
    borderWidth:1,
    borderColor:"#ddd",
    borderRadius:12,
    paddingHorizontal:15,
    marginBottom:25
  },
  pinContainer:{
  flexDirection:"row",
  justifyContent:"center",
  alignItems:"center",
  gap:10,
  marginBottom:30
},

  pinBox:{
  width:55,
  height:55,
  borderWidth:1,
  borderColor:"#ddd",
  borderRadius:10,
  textAlign:"center",
  fontSize:20,
  marginHorizontal:5
},

  button:{
    backgroundColor:"#f4a623",
    width:"100%",
    height:55,
    borderRadius:12,
    justifyContent:"center",
    alignItems:"center"
  },

  buttonText:{
    color:"#fff",
    fontSize:18,
    fontWeight:"600"
  }

});