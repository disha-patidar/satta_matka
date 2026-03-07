import React, {useEffect, useState} from "react";
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
// import { games, Game } from "../../constants/games";
import { useRouter } from "expo-router";
import { Modal } from "react-native";
import { useNavigation } from "expo-router";
import Sidebar from "../../components/Sidebar";

import { getGameStatus } from "../../hooks/useGameStatus";


export default function HomeScreen(){
  const router = useRouter();
  const navigation:any = useNavigation();
const [showClosedModal, setShowClosedModal] = useState(false);
const [selectedGame, setSelectedGame] = useState<any>(null);
const [games,setGames] = useState<any[]>([]);
const [open,setOpen] = useState(false);
const [time,setTime] = useState(new Date());
const walletBalance = 1500;

useEffect(()=>{

const interval = setInterval(()=>{
setTime(new Date());
},30000);

return ()=>clearInterval(interval);

},[]);
useEffect(()=>{

const fetchGames = async ()=>{

try{

const res = await fetch("https://satka-matka.onrender.com/api/games");

const data = await res.json();

setGames(data);

}catch(err){
console.log(err);
}

};

fetchGames();

const interval = setInterval(fetchGames,30000); // refresh every 5 seconds

return ()=>clearInterval(interval);

},[]);

return(

<View style={{flex:1}}>
{/* Sidebar */}
{open && (
<View style={styles.sidebar}>
<Sidebar />
</View>
)}
{/* HEADER */}

<View style={styles.header}>

<TouchableOpacity onPress={()=>setOpen(!open)}>
<Ionicons name="menu" size={26}/>
</TouchableOpacity>


<Text style={styles.headerTitle}>SATKA MATKA</Text>




<View style={styles.headerRight}>

<View style={styles.notificationBox}>
<Ionicons name="notifications-outline" size={22} />

<View style={styles.notificationBadge}>
<Text style={styles.badgeText}>1</Text>
</View>

</View>

<View style={styles.walletBox}>
<MaterialIcons name="account-balance-wallet" size={22} />
<Text style={styles.walletText}>
₹{walletBalance}
</Text>
</View>

</View>

</View>
<ScrollView style={styles.container}>

{/* WhatsApp Row */}
{/* Notification Banner */}

<View style={styles.noticeBox}>
<Text style={styles.noticeText}>
WELCOME TO SATKA MATKA 24X7 SERVICE AVAILABLE
</Text>
</View>


{/* Starline + Jackpot Buttons */}

<View style={styles.specialGameRow}>

<TouchableOpacity style={styles.specialBtn}>

<Ionicons name="play" size={18} color="black"/>

<Text style={styles.specialText}>
King Starline
</Text>

</TouchableOpacity>


<TouchableOpacity style={styles.specialBtn}>

<Ionicons name="play" size={18} color="black"/>

<Text style={styles.specialText}>
King Jackpot
</Text>

</TouchableOpacity>

</View>
<View style={styles.whatsappRow}>
<Ionicons name="logo-whatsapp" size={22} color="#25D366"/>
<Text style={styles.whatsappText}> +91 9407242392</Text>
</View>


{/* GAME CARDS */}

{games.map((game:any,index:number)=>{

const status = getGameStatus(game.open,game.close);

return(

<View key={index} style={styles.card}>

<View style={styles.left}>

<Text style={styles.title}>{game.name}</Text>

<Text style={styles.result}>{game.result}</Text>

<View style={styles.timeRow}>

<View>
<Text style={styles.label}>Open Time</Text>
<Text>{game.open}</Text>
</View>

<View>
<Text style={styles.label}>Close Time</Text>
<Text>{game.close}</Text>
</View>

</View>

</View>


<View style={styles.right}>

<Text style={{color:status.color,fontWeight:"600"}}>
{status.text}
</Text>
{/* 
<TouchableOpacity
disabled={!status.isOpen}
style={[
styles.playBtn,
{opacity:status.isOpen ? 1 : 0.4}
]}
> */}
<TouchableOpacity
style={styles.playBtn}
onPress={() => {

if(!status.isOpen){

setSelectedGame(game);
setShowClosedModal(true);

}else{

router.push({
pathname: "/game-types",
params: { gameName: game.name }
});

}

}}
>
<Ionicons name="play" size={18} color="white"/>
</TouchableOpacity>


<Text style={{fontWeight:"600"}}>Play Game</Text>

</View>

</View>

)

})}

</ScrollView>
<Modal
        visible={showClosedModal}
        transparent
        animationType="fade"
      >

        <View style={styles.modalOverlay}>

          <View style={styles.modalBox}>

            <Text style={styles.modalTitle}>
              Betting Is Closed For Today
            </Text>

            <Text style={styles.modalGame}>
              {selectedGame?.name}
            </Text>

            <View style={styles.timeRow}>

              <View>
                <Text>Open Result Time</Text>
                <Text>{selectedGame?.open}</Text>
              </View>

              <View>
                <Text>Open Bid Last Time</Text>
                <Text>{selectedGame?.open}</Text>
              </View>

            </View>

            <View style={styles.timeRow}>

              <View>
                <Text>Close Result Time</Text>
                <Text>{selectedGame?.close}</Text>
              </View>

              <View>
                <Text>Close Bid Last Time</Text>
                <Text>{selectedGame?.close}</Text>
              </View>

            </View>

            <TouchableOpacity
              style={styles.okBtn}
              onPress={() => setShowClosedModal(false)}
            >
              <Text style={{ color: "white", fontWeight: "bold" }}>
                OK
              </Text>
            </TouchableOpacity>

          </View>

        </View>

      </Modal>
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
justifyContent:"space-between",
paddingHorizontal:15,
paddingVertical:10,
backgroundColor:"#fff",
elevation:4
},

headerTitle:{
fontSize:18,
fontWeight:"bold"
},

walletBox:{
flexDirection:"row",
alignItems:"center",
gap:5
},

walletText:{
fontWeight:"bold"
},

whatsappRow:{
flexDirection:"row",
alignItems:"center",
margin:15
},
noticeBox:{
marginHorizontal:10,
marginTop:10
},

noticeText:{
color:"red",
fontWeight:"bold",
fontSize:14
},

specialGameRow:{
flexDirection:"row",
justifyContent:"space-between",
marginHorizontal:10,
marginTop:10
},

specialBtn:{
flexDirection:"row",
alignItems:"center",
backgroundColor:"#f5a623",
paddingVertical:12,
paddingHorizontal:15,
borderRadius:8,
width:"48%"
},

specialText:{
marginLeft:8,
fontWeight:"600",
fontSize:16
},
whatsappText:{
marginLeft:8,
fontSize:16,
fontWeight:"600"
},

card:{
backgroundColor:"white",
marginHorizontal:10,
marginBottom:12,
padding:15,
borderRadius:12,
flexDirection:"row",
justifyContent:"space-between",
elevation:3
},

left:{
flex:1
},

title:{
fontSize:18,
fontWeight:"bold"
},

result:{
color:"#f5a623",
fontSize:16,
marginVertical:6
},

timeRow:{
flexDirection:"row",
gap:20
},

label:{
fontSize:12,
color:"gray"
},

right:{
alignItems:"center",
justifyContent:"center"
},

playBtn:{
backgroundColor:"#f5a623",
width:45,
height:45,
borderRadius:25,
justifyContent:"center",
alignItems:"center",
marginVertical:6
},

bottomNav:{
flexDirection:"row",
justifyContent:"space-around",
alignItems:"center",
paddingVertical:10,
backgroundColor:"#fff",
elevation:10
},

navItem:{
alignItems:"center"
},

navItemCenter:{
backgroundColor:"#f5a623",
width:50,
height:50,
borderRadius:25,
justifyContent:"center",
alignItems:"center",
marginTop:-25
},

navText:{
fontSize:12
},
headerRight:{
flexDirection:"row",
alignItems:"center",
gap:15
},

notificationBox:{
position:"relative"
},

notificationBadge:{
position:"absolute",
right:-6,
top:-5,
backgroundColor:"red",
borderRadius:10,
width:16,
height:16,
justifyContent:"center",
alignItems:"center"
},

badgeText:{
color:"white",
fontSize:10,
fontWeight:"bold"
},

modalOverlay:{
flex:1,
backgroundColor:"rgba(0,0,0,0.5)",
justifyContent:"center",
alignItems:"center"
},

modalBox:{
backgroundColor:"white",
width:"85%",
borderRadius:10,
padding:20
},

modalTitle:{
color:"red",
fontSize:18,
fontWeight:"bold",
textAlign:"center"
},

modalGame:{
textAlign:"center",
fontSize:18,
marginVertical:10
},

okBtn:{
backgroundColor:"#f5a623",
padding:12,
borderRadius:8,
marginTop:20,
alignItems:"center"
},



sidebar:{
position:"absolute",
left:0,
top:0,
bottom:0,
width:250,
backgroundColor:"#fff",
zIndex:10,
}
});
