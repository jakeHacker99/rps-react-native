import React, { useState, useEffect } from "react";
import {
  StyleSheet,
  View,
  ActivityIndicator,
  FlatList,
  Text,
} from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { GetListApi } from "./src/Context/GetListApi";

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
      <GetListApi />
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

export default function App() {
  // useEffect(() => {
  //   axios
  //     .get("https://reactnative.dev/movies.json", {
  //       method: "no-cors",
  //       headers: {
  //         Accept: "application/json",
  //         // Token: "059e95d5-a6a8-4778-ab5b-7349d5db420b",
  //         "Content-Type": "application/json",
  //       },
  //     })
  //     .then((response) => response.json())
  //     .then((json) => setData(json))
  //     .catch((error) => console.error(error));
  // }, []);

  const [nickName, setNickName] = useState("Jakob vs ...");

  return (
    <AppContext.Provider value={nickName}>
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
