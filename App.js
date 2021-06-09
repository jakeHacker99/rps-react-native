import React, { useState } from "react";
import { StyleSheet, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { StartScreen } from "./src/Screens/StartScreen";
import { MenuScreen } from "./src/Screens/MenuScreen";

import { OnlineGameScreen } from "./src/Screens/OnlineGameScreen";
import { OnlineGameScreenOpponent } from "./src/Screens/OnlineGameScreenOpponent";

import { OfflineGameScreen } from "./src/Screens/OfflineGameScreen";
import { PcWinnerScreen } from "./src/Screens/PcWinnerScreen";

import { WinnerScreen } from "./src/Screens/WinnerScreen";
import { WinnerScreenOnline } from "./src/Screens/WinnerScreenOnline";

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

function Menu() {
  return (
    <View style={styles.container}>
      <MenuScreen />
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
function Online() {
  return (
    <View style={styles.container}>
      <OnlineGameScreen />
    </View>
  );
}
function Online2() {
  return (
    <View style={styles.container}>
      <OnlineGameScreenOpponent />
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
function Winner2() {
  return (
    <View style={styles.container}>
      <WinnerScreenOnline />
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

function OfflineWinner() {
  return (
    <View style={styles.container}>
      <PcWinnerScreen />
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

const Stack = createStackNavigator();

export default function App() {
  const [opponentToken, setOpponentToken] = useState("");
  const [token, setToken] = useState("");
  const [nickName, setNickName] = useState("");
  const [playerMove, setPlayerMove] = useState("");
  const [gameId, setGameId] = useState("");
  const [opponentMove, setOpponentMove] = useState("");
  const [opponentName, setOpponentName] = useState("Datorn");
  const [error, setError] = useState("");

  const allvalues = {
    nickName,
    setNickName,
    opponentName,
    setOpponentName,
    token,
    setToken,
    opponentToken,
    setOpponentToken,
    playerMove,
    setPlayerMove,
    opponentMove,
    setOpponentMove,
    gameId,
    setGameId,
    error,
    setError,
  };

  return (
    <AppContext.Provider value={allvalues}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Menu" component={Menu} />

          <Stack.Screen name="Joina" component={Joina} />
          <Stack.Screen name="Online" component={Online} />
          <Stack.Screen name="Online2" component={Online2} />

          <Stack.Screen name="Winner" component={Winner} />
          <Stack.Screen name="Winner2" component={Winner2} />

          <Stack.Screen name="Offline" component={Offline} />
          <Stack.Screen name="OfflineWinner" component={OfflineWinner} />
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
