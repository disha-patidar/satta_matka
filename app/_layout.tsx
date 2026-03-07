import React, { createContext, useState } from "react";
import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native";
import { Stack } from "expo-router";
import { StatusBar } from "expo-status-bar";
import "react-native-reanimated";

export const ThemeContext = createContext<any>(null);

export default function RootLayout() {

const [darkMode, setDarkMode] = useState(false);

return (

<ThemeContext.Provider value={{ darkMode, setDarkMode }}>

<ThemeProvider value={darkMode ? DarkTheme : DefaultTheme}>

<Stack screenOptions={{ headerShown: false }}>

{/* Auth Screens */}

<Stack.Screen name="index" />
<Stack.Screen name="language" />
<Stack.Screen name="signup" />
<Stack.Screen name="setpin" />
<Stack.Screen name="mpin" />

{/* Main App */}

<Stack.Screen name="(tabs)" />

</Stack>

<StatusBar style={darkMode ? "light" : "dark"} />

</ThemeProvider>

</ThemeContext.Provider>

);

}