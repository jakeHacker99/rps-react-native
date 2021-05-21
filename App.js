import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button as Button1 } from "react-native-elements";

import { StartScreen } from "./src/screens/StartScreen";
import { MenuScreen } from "./src/screens/MenuScreen";

function Menu() {
  return (
    <>
      <MenuScreen />
      {/* 
      
      onPress till alla knappar ska in här
      
      
      */}
    </>
  );
}

function Start({ navigation }) {
  return (
    <>
      <StartScreen />
      <Button1
        title="Start Playing"
        type={"outline"}
        style={styles.container}
        onPress={() => navigation.navigate("Menu")}
      />
    </>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Menu" component={Menu} />
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
