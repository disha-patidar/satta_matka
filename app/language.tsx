import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useRouter } from "expo-router";

export default function LanguageScreen() {

  const router = useRouter();

  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>Select your Language</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.buttonText}>English</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.buttonText}>हिंदी</Text>
      </TouchableOpacity>
{/* 
      <TouchableOpacity
        style={styles.button}
        onPress={() => router.push("/signup")}
      >
        <Text style={styles.buttonText}>ગુજરાતી</Text>
      </TouchableOpacity> */}

    </View>
  );
}

const styles = StyleSheet.create({

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },

  title: {
    fontSize: 26,
    marginBottom: 40,
    fontWeight: "bold",
    color: "#333"
  },

  button: {
    width: 220,
    padding: 16,
    backgroundColor: "#f4a623",
    borderRadius: 10,
    marginVertical: 10,
    elevation: 3
  },

  buttonText: {
    color: "white",
    textAlign: "center",
    fontSize: 18,
    fontWeight: "500"
  },

});