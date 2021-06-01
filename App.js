import React, { useState, createContext } from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { CreateToken } from "./src/Data/CreateToken";

import { StartScreen } from "./src/Screens/StartScreen";
import { MenuScreen } from "./src/Screens/MenuScreen";
import { OfflineGameScreen } from "./src/Screens/OfflineGameScreen";
import { OnlineGameScreen } from "./src/Screens/OnlineGameScreen";

import { WinnerScreen } from "./src/Screens/WinnerScreen";
import { PcWinnerScreen } from "./src/Screens/PcWinnerScreen";

import { ListGamesScreen } from "./src/Screens/ListGamesScreen";
import { JoinablePlayersScreen } from "./src/Screens/JoinablePlayersScreen";

import AppContext from "./src/Context/AppContext";

function Start() {
  return (
    <View style={styles.container}>
      <StartScreen />
      <CreateToken />
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
      <OnlineGameScreen />
    </View>
  );
}

function Offline() {
  return (
    <View style={styles.container}>
      <OfflineGameScreen />
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

export default function App() {
  const [opponentName] = useState("Datorn");

  const [token, setToken] = useState("");

  const [opponentToken, setOpponentToken] = useState("");
  const [nickName, setNickName] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [opponentMove, setOpponentMove] = useState("");

  const allvalues = {
    nickName,
    setNickName,
    opponentName,
    token,
    setToken,
    opponentToken,
    setOpponentToken,
    playerMove,
    setPlayerMove,
    opponentMove,
    setOpponentMove,
  };

  return (
    <AppContext.Provider value={allvalues}>
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
