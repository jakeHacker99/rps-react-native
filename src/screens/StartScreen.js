import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, Image, TextInput, Button } from "react-native";

import { NavigationContext } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import AppContext from "../Context/AppContext";

export function StartScreen() {
  const title = useState("Rock Paper Scissors");
  const navigation = useContext(NavigationContext);
  const name = useContext(AppContext);

  // shu

  const [nickName, setNickName] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={require("../../assets/rps.png")} />
      <View style={styles.title}>
        <Text style={styles.rock}>Rock </Text>
        <Text style={styles.paper}>Paper </Text>
        <Text style={styles.scissors}>{name} </Text>
      </View>

      <TextInput
        style={{ height: 40, margin: 12, borderWidth: 1, marginTop: 120 }}
        placeholder={"Enter your nickname"}
        onChangeText={(nickName) => setNickName(nickName)}
        defaultValue={nickName}
      />
      {nickName == "" && (
        <Button title={"Please enter valid nickname"} type={"outline"} />
      )}
      {nickName != "" && (
        <Button
          title={"Let's start " + nickName}
          type={"outline"}
          onPress={() => navigation.navigate("Menu")}
        />
      )}

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

  button: {},
});
