

import React from "react";
import {
View,
Text,
StyleSheet,
Image,
TouchableOpacity
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";

export default function depositHistory(){

const router = useRouter();

return(

<View style={styles.container}>

{/* Header */}

<View style={styles.header}>

<TouchableOpacity onPress={()=>router.back()}>

<Ionicons name="arrow-back" size={24} />

</TouchableOpacity>

<Text style={styles.title}>
Deposit History
</Text>

</View>


{/* No Data */}

<View style={styles.noDataContainer}>

<Image
source={require("../assets/images/ban.png")}
style={styles.image}
/>

{/* <Text style={styles.noDataText}>
No Data Found!
</Text> */}

</View>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:" hsl(0, 0%, 90%)"
},

header:{
flexDirection:"row",
alignItems:"center",
padding:15,
backgroundColor:"#fff",
gap:10,
borderBottomWidth:1,
borderColor:"#ddd"
},

title:{
fontSize:18,
fontWeight:"bold"
},

noDataContainer:{
flex:1,
justifyContent:"center",
alignItems:"center"
},

image:{
width:260,
height:260,
resizeMode:"contain"
},

noDataText:{
fontSize:20,
fontWeight:"bold",
marginTop:10
}

});