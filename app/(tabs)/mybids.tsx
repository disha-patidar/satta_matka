import React from "react";
import { View, Text, StyleSheet, FlatList } from "react-native";

const bids = [

{
id:"1",
game:"RADHA MORNING",
number:"245",
amount:"₹100",
status:"Lost"
},

{
id:"2",
game:"TATA MORNING",
number:"378",
amount:"₹200",
status:"Win"
},

{
id:"3",
game:"MILAN NIGHT",
number:"569",
amount:"₹150",
status:"Pending"
}

];

export default function MyBidsScreen(){

return(

<View style={styles.container}>

<Text style={styles.title}>
My Bids
</Text>

<FlatList
data={bids}
keyExtractor={(item)=>item.id}
renderItem={({item})=>(

<View style={styles.card}>

<View>

<Text style={styles.game}>
{item.game}
</Text>

<Text style={styles.number}>
Number: {item.number}
</Text>

</View>

<View>

<Text style={styles.amount}>
{item.amount}
</Text>

<Text style={styles.status}>
{item.status}
</Text>

</View>

</View>

)}
/>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f3f3",
padding:10
},

title:{
fontSize:22,
fontWeight:"bold",
marginBottom:10
},

card:{
backgroundColor:"white",
padding:15,
borderRadius:10,
marginBottom:10,
flexDirection:"row",
justifyContent:"space-between"
},

game:{
fontSize:16,
fontWeight:"600"
},

number:{
color:"gray"
},

amount:{
fontWeight:"bold"
},

status:{
color:"#f5a623"
}

});