// import { Tabs } from "expo-router";
// import { Ionicons, MaterialIcons } from "@expo/vector-icons";

// export default function TabsLayout() {
//   return (
//     <Tabs
//       initialRouteName="home"
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "#f6a623",
//         tabBarStyle: {
//           height: 65,
//         },
//         tabBarLabelStyle: {
//           fontSize: 12,
//         },
//       }}
//     >
//       <Tabs.Screen
//         name="mybids"
//         options={{
//           title: "My Bids",
//           tabBarIcon: ({ color, size }) => (
//             <MaterialIcons name="gavel" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="passbook"
//         options={{
//           title: "Passbook",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="book-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="home"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size + 6} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="funds"
//         options={{
//           title: "Funds",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="wallet-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="support"
//         options={{
//           title: "Support",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="headset-outline" size={size} color={color} />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }

// import { Tabs } from "expo-router";
// import { Ionicons } from "@expo/vector-icons";
// import Sidebar from "../components/Sidebar";
// export default function Layout() {
//   return (
//     <Tabs
//       screenOptions={{
//         headerShown: false,
//         tabBarActiveTintColor: "#f5a623",
//         tabBarInactiveTintColor: "gray",
//         tabBarStyle: {
//           height: 65,
//           paddingBottom: 6,
//         },
//       }}
//     >

//       <Tabs.Screen
//         name="mybids"
//         options={{
//           title: "Bids",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="hammer-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="passbook"
//         options={{
//           title: "Passbook",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="book-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="home"
//         options={{
//           title: "Home",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="home" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="wallet"
//         options={{
//           title: "Funds",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="wallet-outline" size={size} color={color} />
//           ),
//         }}
//       />

//       <Tabs.Screen
//         name="support"
//         options={{
//           title: "Support",
//           tabBarIcon: ({ color, size }) => (
//             <Ionicons name="headset-outline" size={size} color={color} />
//           ),
//         }}
//       />

//     </Tabs>
//   );
// }

import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";
import Sidebar from "../../../components/Sidebar";
export default function Layout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: "#f5a623",
        tabBarInactiveTintColor: "gray",
        tabBarStyle: {
          height: 65,
          paddingBottom: 6,
        },
      }}
    >

      <Tabs.Screen
        name="mybids"
        options={{
          title: "Bids",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="hammer-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="passbook"
        options={{
          title: "Passbook",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="book-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="home"
        options={{
          title: "Home",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="wallet"
        options={{
          title: "Funds",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="wallet-outline" size={size} color={color} />
          ),
        }}
      />

      <Tabs.Screen
        name="support"
        options={{
          title: "Support",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="headset-outline" size={size} color={color} />
          ),
        }}
      />

    </Tabs>
  );
}