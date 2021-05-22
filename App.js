import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button as Button1 } from "react-native-elements";

import { StartScreen } from "./src/screens/StartScreen";
import { MenuScreen } from "./src/screens/MenuScreen";
import { InGameScreen } from "./src/screens/InGameScreen";
import { WinnerScreen } from "./src/screens/WinnerScreen";
import { ListGamesScreen } from "./src/screens/ListGamesScreen";

function Start({ navigation }) {
  return (
    <>
      <StartScreen></StartScreen>
      <Button1
        title="Start Playing"
        type={"outline"}
        style={styles.rock}
        onPress={() => navigation.navigate("Menu")}
      />
    </>
  );
}

function Games() {
  return (
    <>
      <ListGamesScreen />
    </>
  );
}

function Menu() {
  return (
    <>
      <MenuScreen />
    </>
  );
}

function Online() {
  return (
    <>
      <InGameScreen />
    </>
  );
}

function Offline() {
  return (
    <>
      <InGameScreen />
    </>
  );
}

function Winner() {
  return (
    <>
      <WinnerScreen />
    </>
  );
}
const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Games" component={Games} />
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Winner" component={Winner} />

        <Stack.Screen name="Online" component={Online} />
        <Stack.Screen name="Menu" component={Menu} />
        <Stack.Screen name="Offline" component={Offline} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
