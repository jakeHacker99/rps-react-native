import React, { useState } from "react";
import { StyleSheet, Text, View, Image, TextInput } from "react-native";

import { StatusBar } from "expo-status-bar";

export function StartScreen() {
  const title = useState("Rock Paper Scissors");

  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={require("../../assets/rps.png")} />
      <View style={styles.title}>
        <Text style={styles.rock}>Rock </Text>
        <Text style={styles.paper}>Paper </Text>
        <Text style={styles.scissors}>Scissors</Text>
      </View>
      <TextInput style={styles.input} placeholder={"Write your name"} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
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
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: 200,
  },
  button: {},
});
