
import { View, Text, TouchableOpacity, StyleSheet, Switch,Alert,Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { useEffect, useState } from "react";
import { Share } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useContext } from "react";
import { ThemeContext } from "../app/_layout";
export default function Sidebar(){
const { darkMode, setDarkMode } = useContext(ThemeContext);
const [user,setUser] = useState<any>(null);


useEffect(()=>{
loadUser();
},[]);

const loadUser = async ()=>{
const data = await AsyncStorage.getItem("user");

if(data){
setUser(JSON.parse(data));
}
};

const shareApp = async () => {

try {

await Share.share({

message:
"Download this Matka app now! 🎯\nhttps://yourappdownloadlink.com"

});

} catch (error) {

console.log(error);

}

};

const logout = async () => {

if (Platform.OS === "web") {

const confirmLogout = window.confirm("Are you sure you want to logout?");

if (confirmLogout) {
await AsyncStorage.removeItem("user");
await AsyncStorage.removeItem("isLoggedIn");
router.replace("/");
}

} else {

Alert.alert(
"Logout",
"Are you sure you want to logout?",
[
{ text: "Cancel", style: "cancel" },
{
text: "Logout",
onPress: async () => {

await AsyncStorage.removeItem("user");
await AsyncStorage.removeItem("isLoggedIn");

router.replace("/");
}
}
]
);

}

};
const theme = {
background: darkMode ? "#121212" : "#ffffff",
text: darkMode ? "#ffffff" : "#000000",
card: darkMode ? "#1f1f1f" : "#f5f5f5"
};
return(

<View style={styles.container}>

{/* PROFILE */}

<View style={styles.profile}>

<Ionicons name="person-circle-outline" size={60} color="#444"/>

<Text style={styles.name}>{user?.name}</Text>

<Text style={styles.phone}>{user?.phone}</Text>

</View>


{/* MENU ITEMS */}

<MenuItem
icon="home-outline"
text="Home"
onPress={()=>router.push("/(tabs)/home")}
/>

<MenuItem
icon="hammer-outline"
text="My Bids"
onPress={()=>router.push("/(tabs)/mybids")}
/>

<MenuItem
icon="lock-closed-outline"
text="M-PIN"
onPress={()=>router.push("/mpin")}
/>

<MenuItem
icon="book-outline"
text="Passbook"
onPress={()=>router.push("/(tabs)/passbook")}
/>

<MenuItem
icon="wallet-outline"
text="Funds"
onPress={()=>router.push("/(tabs)/wallet")}
/>

<MenuItem
icon="videocam-outline"
text="Video"
/>

<MenuItem
icon="star-outline"
text="Game Rate"
onPress={()=>router.push("/game-rate")}
/>

<MenuItem
icon="settings-outline"
text="Settings"
/>
<TouchableOpacity
style={styles.item}
onPress={shareApp}
>

<Ionicons name="share-social-outline" size={22} />

<Text style={styles.text}>Share Now</Text>

</TouchableOpacity>

<TouchableOpacity style={styles.item} onPress={logout}>
<Ionicons name="log-out-outline" size={22}/>
<Text style={styles.text}>Logout</Text>
</TouchableOpacity>


{/* THEME SWITCH */}

<View style={styles.themeRow}>

<Text>Light</Text>

<Switch
value={darkMode}
onValueChange={(value)=>setDarkMode(value)}
/>

<Text>Dark</Text>

</View>

</View>

);

}


function MenuItem({icon,text,onPress}:any){

return(

<TouchableOpacity style={styles.item} onPress={onPress}>

<Ionicons name={icon} size={22} color="#333"/>

<Text style={styles.text}>{text}</Text>

</TouchableOpacity>

)

}


const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#fff",
paddingTop:60,
paddingHorizontal:20
},

profile:{
marginBottom:30
},

name:{
fontSize:18,
fontWeight:"bold",
marginTop:5
},

phone:{
color:"gray"
},

item:{
flexDirection:"row",
alignItems:"center",
marginVertical:12
},

text:{
marginLeft:15,
fontSize:16
},

themeRow:{
flexDirection:"row",
alignItems:"center",
justifyContent:"space-between",
marginTop:20
}

});