import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  ScrollView
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function SingleDigitBulk() {

  const [amount, setAmount] = useState("");
  const [gameType, setGameType] = useState("Open");
  const [showDropdown, setShowDropdown] = useState(false);
  const [bids, setBids] = useState<any[]>([]);

  const digits = [1,2,3,4,5,6,7,8,9,0];

  const addBid = (digit:any) => {

    if(!amount) return;

    const newBid = {
      digit,
      amount,
      gameType
    };

    setBids([...bids,newBid]);
  };

  return (

    <ScrollView style={styles.container}>

      {/* HEADER */}
      <View style={styles.header}>

        <TouchableOpacity>
          <Ionicons name="arrow-back" size={24} />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>
          SINGLE DIGIT BULK
        </Text>

        <View style={styles.wallet}>
          <Ionicons name="wallet-outline" size={22} />
          <Text style={{marginLeft:5}}>5</Text>
        </View>

      </View>

      {/* GAME TYPE */}
      <Text style={styles.label}>Select Game Type:</Text>

      <TouchableOpacity
        style={styles.input}
        onPress={()=>setShowDropdown(!showDropdown)}
      >
        <Text>{gameType}</Text>
      </TouchableOpacity>

      {showDropdown && (

        <View style={styles.dropdown}>

          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={()=>{
              setGameType("Open");
              setShowDropdown(false);
            }}
          >
            <Text>Open</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.dropdownItem}
            onPress={()=>{
              setGameType("Close");
              setShowDropdown(false);
            }}
          >
            <Text>Close</Text>
          </TouchableOpacity>

        </View>

      )}

      {/* AMOUNT */}
      <Text style={styles.label}>Enter Points:</Text>

      <TextInput
        style={styles.input}
        placeholder="Enter Amount"
        keyboardType="numeric"
        value={amount}
        onChangeText={setAmount}
      />

      {/* DIGIT GRID */}
      <View style={styles.grid}>

        {digits.map((num,index)=>(

          <TouchableOpacity
            key={index}
            style={styles.digitBox}
            onPress={()=>addBid(num)}
          >
            <Text style={styles.digitText}>{num}</Text>
          </TouchableOpacity>

        ))}

      </View>

      {/* TABLE HEADER */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableText}>Digit</Text>
        <Text style={styles.tableText}>Amount</Text>
        <Text style={styles.tableText}>Game Type</Text>
      </View>

      {/* BID LIST */}
      {bids.map((item,index)=>(
        <View key={index} style={styles.row}>
          <Text>{item.digit}</Text>
          <Text>{item.amount}</Text>
          <Text>{item.gameType}</Text>
        </View>
      ))}

    </ScrollView>

  );
}

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"#f2f2f2"
  },

  header:{
    flexDirection:"row",
    justifyContent:"space-between",
    alignItems:"center",
    padding:15,
    backgroundColor:"white"
  },

  headerTitle:{
    fontSize:18,
    fontWeight:"bold"
  },

  wallet:{
    flexDirection:"row",
    alignItems:"center"
  },

  label:{
    marginTop:15,
    marginHorizontal:15,
    fontSize:16
  },

  input:{
    borderWidth:1,
    borderColor:"#ccc",
    marginHorizontal:15,
    marginTop:5,
    padding:12,
    borderRadius:25,
    backgroundColor:"white"
  },

grid:{
flexDirection:"row",
flexWrap:"wrap",
justifyContent:"space-between",
marginHorizontal:10,
marginTop:20
},
  digitBox:{
width:"18%",   // makes 5 boxes fit in one row
height:60,
backgroundColor:"#f5a623",
justifyContent:"center",
alignItems:"center",
borderRadius:10,
marginBottom:15
},

  digitText:{
    fontSize:28,
    color:"white",
    fontWeight:"bold"
  },

  tableHeader:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:10,
    borderBottomWidth:1,
    borderColor:"#ccc"
  },

  tableText:{
    fontWeight:"bold"
  },

  row:{
    flexDirection:"row",
    justifyContent:"space-around",
    padding:12,
    borderBottomWidth:1,
    borderColor:"#eee"
  },

  dropdown:{
    backgroundColor:"white",
    marginHorizontal:15,
    borderRadius:10,
    borderWidth:1,
    borderColor:"#ccc"
  },

  dropdownItem:{
    padding:12,
    borderBottomWidth:1,
    borderColor:"#eee"
  }

});