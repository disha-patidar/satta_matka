import { View, Text, StyleSheet } from "react-native";
import { useEffect } from "react";
import { router } from "expo-router";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Index() {

  useEffect(() => {

  const checkUser = async () => {

    const isLoggedIn = await AsyncStorage.getItem("isLoggedIn");

    setTimeout(() => {

      if(isLoggedIn === "true"){
        router.replace("/(tabs)/home");
      }else{
        router.replace("/language");
      }

    },2000);

  };

  checkUser();

},[]);

  return (
    <View style={styles.container}>

      <View style={styles.logoContainer}>
        <Text style={styles.logoText}>S</Text>
      </View>

      <Text style={styles.appName}>Satka Matka</Text>

      <Text style={styles.tagline}>
        Fast • Secure • Trusted
      </Text>

    </View>
  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center",
    backgroundColor:"#f4a623"
  },

  logoContainer:{
    width:100,
    height:100,
    borderRadius:50,
    backgroundColor:"#fff",
    justifyContent:"center",
    alignItems:"center",
    marginBottom:20
  },

  logoText:{
    fontSize:40,
    fontWeight:"bold",
    color:"#f4a623"
  },

  appName:{
    fontSize:28,
    fontWeight:"bold",
    color:"#fff",
    marginBottom:5
  },

  tagline:{
    fontSize:14,
    color:"#fff",
    opacity:0.9
  }

});