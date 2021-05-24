import React, { useState } from "react";
import { StyleSheet, TextInput } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button as Button1 } from "react-native-elements";

import { StartScreen } from "./src/screens/StartScreen";
import { MenuScreen } from "./src/screens/MenuScreen";
import { InGameScreen } from "./src/screens/InGameScreen";
import { WinnerScreen } from "./src/screens/WinnerScreen";
import { ListGamesScreen } from "./src/screens/ListGamesScreen";

function Start({ navigation }) {
  const [nickName, setNickName] = useState("");

  return (
    <>
      <StartScreen></StartScreen>
      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, marginTop: 120 }}
        placeholder={"Enter your nickname"}
        onChangeText={(nickName) => setNickName(nickName)}
        defaultValue={nickName}
      />
      {nickName == "" && (
        <Button1 title={"Please enter valid nickname"} type={"outline"} />
      )}
      {nickName != "" && (
        <Button1
          title={"Let's start " + nickName}
          type={"outline"}
          onPress={() => navigation.navigate("Menu")}
        />
      )}
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
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Games" component={Games} />
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
