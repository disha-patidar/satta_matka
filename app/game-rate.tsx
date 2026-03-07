import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function GameRate() {

return (

<ScrollView style={styles.container}>

<Text style={styles.header}>Game Win Ratio for All Bids</Text>

<View style={styles.card}><Text>Single - 10/95</Text></View>
<View style={styles.card}><Text>Jodi - 10/950</Text></View>
<View style={styles.card}><Text>Single Panna - 10/1400</Text></View>
<View style={styles.card}><Text>Double Panna - 10/2800</Text></View>
<View style={styles.card}><Text>Triple Panna - 10/7000</Text></View>
<View style={styles.card}><Text>Half Sangam - 10/10000</Text></View>
<View style={styles.card}><Text>Full Sangam - 10/100000</Text></View>

<Text style={styles.header}>King Starline Game Win Ratio</Text>

<View style={styles.card}><Text>Single - 10/95</Text></View>
<View style={styles.card}><Text>Single Panna - 10/1400</Text></View>
<View style={styles.card}><Text>Double Panna - 10/2800</Text></View>
<View style={styles.card}><Text>Triple Panna - 10/7000</Text></View>

<Text style={styles.header}>King Jackpot Win Ratio</Text>

<View style={styles.card}><Text>Single - 10/95</Text></View>
<View style={styles.card}><Text>Jodi - 10/950</Text></View>

</ScrollView>

);

}

const styles = StyleSheet.create({

container:{
flex:1,
backgroundColor:"#f5f5f5",
padding:15
},

header:{
backgroundColor:"#f4a623",
padding:15,
fontWeight:"bold",
fontSize:16,
borderRadius:10,
marginBottom:15,
textAlign:"center"
},

card:{
backgroundColor:"#fff",
padding:18,
borderRadius:12,
marginBottom:12,
alignItems:"center",

shadowColor:"#000",
shadowOpacity:0.1,
shadowRadius:6,
elevation:4
}

});