import React, { useContext, useState, createContext, useEffect } from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StartScreen } from "./src/Screens/StartScreen";
import { MenuScreen } from "./src/Screens/MenuScreen";
import { InGameScreen } from "./src/Screens/InGameScreen";
import { WinnerScreen } from "./src/Screens/WinnerScreen";
import { PcWinnerScreen } from "./src/Screens/PcWinnerScreen";

import { ListGamesScreen } from "./src/Screens/ListGamesScreen";
import { JoinablePlayersScreen } from "./src/Screens/JoinablePlayersScreen";

import AppContext from "./src/Context/AppContext";

function Start() {
  return (
    <View style={styles.container}>
      <StartScreen />
    </View>
  );
}

function History() {
  return (
    <View style={styles.container}>
      <ListGamesScreen />
    </View>
  );
}

function Joina() {
  return (
    <View style={styles.container}>
      <JoinablePlayersScreen />
    </View>
  );
}

function Menu() {
  return (
    <View style={styles.container}>
      <MenuScreen />
    </View>
  );
}

function Online() {
  return (
    <View style={styles.container}>
      <InGameScreen />
    </View>
  );
}

function Offline() {
  return (
    <View style={styles.container}>
      <InGameScreen />
    </View>
  );
}

function Winner() {
  return (
    <View style={styles.container}>
      <WinnerScreen />
    </View>
  );
}
function OfflineWinner() {
  return (
    <View style={styles.container}>
      <PcWinnerScreen />
    </View>
  );
}
const Stack = createStackNavigator();

const TokenContex = createContext();

export default function App() {
  const [opponentName] = useState("Yazan");

  const [nickName, setNickName] = useState("");

 const [token, setToken] = useState("");
  // console.log("token1",token)
  useEffect(() => {
        fetch('http://192.168.1.181:8080/tokens/new')
        .then(response => response.text())
        .then(newToken => setToken(newToken));
        
      }, );[]

      // console.log("token2",token)

  

  return (
    <TokenContex.Provider value={token}>
    <AppContext.Provider value={{ nickName, setNickName, opponentName }}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Offline" component={Offline} />
          <Stack.Screen name="Online" component={Online} />

          <Stack.Screen name="OfflineWinner" component={OfflineWinner} />
          <Stack.Screen name="Winner" component={Winner} />

          <Stack.Screen name="Joina" component={Joina} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
    </TokenContex.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
