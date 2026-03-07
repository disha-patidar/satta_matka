import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";

export default function Notification(){

return(

<View style={styles.container}>

{/* Header */}

<View style={styles.header}>

<Ionicons
name="arrow-back"
size={24}
onPress={()=>router.back()}
/>

<Text style={styles.title}>Notification</Text>

</View>

<ScrollView>

<View style={styles.card}>
<Text style={styles.heading}>WITHDRAW TIME</Text>

<Text style={styles.text}>
Morning 7:30 AM to Morning 10:00 AM
</Text>
</View>

<View style={styles.card}>
<Text style={styles.heading}>WITHDRAW</Text>

<Text style={styles.text}>
Please Contact On Whatsapp (+91 9407242392)
After Withdraw Request For Fast Withdrawal.

{"\n\n"}Thank you
</Text>

</View>

<View style={styles.card}>
<Text style={styles.heading}>DEPOSIT</Text>

<Text style={styles.text}>
Dear Valued Customers,

{"\n\n"}We are pleased to inform you that Auto Deposit
is now available on our application.

{"\n\n"}Benefits of Auto Deposit:

{"\n"}• Instant and hassle-free deposits
{"\n"}• Secure and reliable process
{"\n"}• 24/7 availability through the application
</Text>

</View>

</ScrollView>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f5f5"
},

header:{
flexDirection:"row",
alignItems:"center",
padding:15,
backgroundColor:"#fff"
},

title:{
fontSize:18,
fontWeight:"bold",
marginLeft:10
},

card:{
backgroundColor:"#fff",
margin:15,
padding:18,
borderRadius:10,

shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:6,
elevation:4
},

heading:{
fontWeight:"bold",
fontSize:16,
marginBottom:8
},

text:{
fontSize:14,
lineHeight:22
}

});