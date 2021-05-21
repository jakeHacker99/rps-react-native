import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button as Button1 } from "react-native-elements";

function Start({ navigation }) {
  const title = useState("Rock Paper Scissors");

  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={require("./assets/rps.png")} />
      <View style={styles.title}>
        <Text style={styles.rock}>Rock </Text>
        <Text style={styles.paper}>Paper </Text>
        <Text style={styles.scissors}>Scissors</Text>
      </View>
      <TextInput style={styles.input} placeholder={"Write your name"} />
      <Button
        style={styles.button}
        title="Next"
        onPress={() => navigation.navigate("Menu")}
      />
      <StatusBar style="auto" />
    </View>
  );
}
class Menu extends React.Component {
  handleClick = () => {
    console.log("this is :", this);
  };

  render() {
    return (
      <View style={styles.fixBackground}>
        <View style={styles.container}>
          <Text style={{ fontSize: 33, marginTop: 50 }}>RPS Jakob-Yazan</Text>
        </View>
        <View style={styles.box}>
          <Button1
            title="Spela Online"
            style={{ width: 150, marginTop: 150 }}
            type={"outline"}
          />
          <Button1
            title=" Spela Dator"
            style={{ width: 150, marginTop: 20 }}
            type={"outline"}
            onPress={this.handleClick}
          />
        </View>

        <View style={styles.buttomRow}>
          <Button1
            title="Hem"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
          />
          <Button1
            title="Spel"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
          />
          <Button1
            title="Lista"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
          />
        </View>
      </View>
    );
  }
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
  fixBackground: {
    backgroundColor: "#fff",
  },
  row: {
    flexDirection: "row",
  },
  box: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttomRow: {
    flexDirection: "row",
    marginTop: 120,
    justifyContent: "center",
  },

  rock: {
    color: "#ffcc00",
    fontWeight: "bold",
    fontSize: 20,
  },
  paper: {
    color: "#4db8ff",
    fontWeight: "bold",
    fontSize: 20,
  },
  scissors: {
    color: "#ff9900",
    fontWeight: "bold",
    fontSize: 20,
  },
  pic: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
  title: {
    flexDirection: "row",

    // fontSize: 20,
    // fontWeight: 'bold',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: 200,
  },
  button: {},
});
