import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Linking } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";

export default function SupportScreen() {

const phoneNumber = "+919407242392";
const whatsappNumber = "919407242392";
const email = "support@satkamakta.com";

const callSupport = () => {
Linking.openURL(`tel:${phoneNumber}`);
};

const openWhatsApp = () => {
Linking.openURL(`https://wa.me/${whatsappNumber}`);
};

const sendEmail = () => {
Linking.openURL(`mailto:${email}`);
};

return (

<View style={styles.container}>

<Text style={styles.title}>Customer Support</Text>

<Text style={styles.subtitle}>
If you need help, contact us using the options below
</Text>

{/* Call Button */}

<TouchableOpacity style={styles.button} onPress={callSupport}>
<Ionicons name="call-outline" size={22} color="white" />
<Text style={styles.buttonText}>Call Support</Text>
</TouchableOpacity>


{/* WhatsApp Button */}

<TouchableOpacity style={[styles.button,{backgroundColor:"#25D366"}]} onPress={openWhatsApp}>
<Ionicons name="logo-whatsapp" size={22} color="white" />
<Text style={styles.buttonText}>WhatsApp Support</Text>
</TouchableOpacity>


{/* Email Button */}

<TouchableOpacity style={[styles.button,{backgroundColor:"#4a90e2"}]} onPress={sendEmail}>
<MaterialIcons name="email" size={22} color="white" />
<Text style={styles.buttonText}>Email Support</Text>
</TouchableOpacity>


<View style={styles.infoBox}>
<Text style={styles.infoText}>
Support available 24×7 for all users.
</Text>
</View>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f3f3",
padding:20
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:5
},

subtitle:{
color:"gray",
marginBottom:25
},

button:{
flexDirection:"row",
alignItems:"center",
justifyContent:"center",
backgroundColor:"#f5a623",
padding:14,
borderRadius:10,
marginBottom:15
},

buttonText:{
color:"white",
fontSize:16,
fontWeight:"600",
marginLeft:8
},

infoBox:{
marginTop:30,
backgroundColor:"white",
padding:15,
borderRadius:10
},

infoText:{
textAlign:"center",
color:"gray"
}

});