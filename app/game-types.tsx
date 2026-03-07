import { View, Text, StyleSheet, FlatList, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter, useLocalSearchParams } from "expo-router";
const routes:any = {

"Single Digits": "/single-digit",
"Single Digits Bulk": "/single-digit-bulk",

"Jodi": "/jodi",
"Jodi Bulk": "/jodi-bulk",

"Single Pana": "/single-patti",
"Single Pana Bulk": "/single-patti-bulk",

"Double Pana": "/double-patti",
"Double Pana Bulk": "/double-patti-bulk",

"Triple Pana": "/triple-patti",

"Odd Even": "/odd-even",

"Two Digits Panel": "/two-digit-panel",

"Panel Group": "/panel",

"SP DP TP": "/sp-dp",
"Choice Panna SP DP": "/choice-patti",

"SP Motor": "/sp-motor",
"DP Motor": "/dp-motor",
"Group Jodi": "/group-jodi",
"Digit Based Jodi": "/digit-based-jodi"

};
const gameTypes = [

{ name:"Single Digits", icon:"ellipse-outline" },
{ name:"Single Digits Bulk", icon:"ellipse-outline" },

{ name:"Jodi", icon:"grid-outline" },
{ name:"Jodi Bulk", icon:"grid-outline" },

{ name:"Single Pana", icon:"card-outline" },
{ name:"Single Pana Bulk", icon:"card-outline" },

{ name:"Double Pana", icon:"albums-outline" },
{ name:"Double Pana Bulk", icon:"albums-outline" },

{ name:"Triple Pana", icon:"layers-outline" },

{ name:"Panel Group", icon:"people-outline" },

{ name:"SP DP TP", icon:"radio-outline" },

{ name:"Choice Panna SP DP", icon:"copy-outline" },

{ name:"SP Motor", icon:"settings-outline" },

{ name:"DP Motor", icon:"settings-outline" },

{ name:"Odd Even", icon:"dice-outline" },

{ name:"Two Digits Panel", icon:"square-outline" },

{ name:"Group Jodi", icon:"apps-outline" },

{ name:"Digit Based Jodi", icon:"apps-outline" }

];

export default function GameTypes() {

const router = useRouter();

/* GET GAME NAME FROM HOME SCREEN */

const { gameName } = useLocalSearchParams();

return(

<View style={styles.container}>

{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity onPress={()=>router.back()}>
<Ionicons name="arrow-back" size={24}/>
</TouchableOpacity>

{/* DYNAMIC GAME TITLE */}

<Text style={styles.title}>
{gameName}
</Text>

</View>


{/* GAME TYPES GRID */}

<FlatList
data={gameTypes}
numColumns={2}
keyExtractor={(item)=>item.name}
renderItem={({item})=>(

<TouchableOpacity
style={styles.itemBox}

onPress={() =>
router.push({
pathname: routes[item.name],
params:{ gameName }
})
}

>

<View style={styles.circle}>

<Ionicons
name={item.icon as any}
size={40}
color="#f5a623"
/>

</View>

<Text style={styles.gameText}>
{item.name}
</Text>

</TouchableOpacity>

)}

/>

</View>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f3f3f3"
},

header:{
flexDirection:"row",
alignItems:"center",
padding:15,
backgroundColor:"white"
},

title:{
fontSize:18,
fontWeight:"bold",
marginLeft:15
},

itemBox:{
flex:1,
alignItems:"center",
marginVertical:20
},

circle:{
width:110,
height:110,
borderRadius:60,
backgroundColor:"#eee",
justifyContent:"center",
alignItems:"center"
},

gameText:{
marginTop:10,
fontSize:15
}

});