import React, { useState, useContext } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { Button, Image } from "react-native-elements";
import { NavigationContext } from "@react-navigation/native";
import AppContext from "../Context/AppContext";

export function StartScreen() {
  const navigation = useContext(NavigationContext);
  const name = useContext(AppContext);

  const [nickName, setNickName] = useState("");

  return (
    <View style={styles.container}>
      <Image style={styles.pic} source={require("../../assets/rps.png")} />
      <View style={styles.title}>
        <Text style={styles.rock}>Rock </Text>
        <Text style={styles.paper}>Paper </Text>
        <Text style={styles.scissors}>Scissors </Text>
      </View>

      <TextInput
        style={styles.input}
        placeholder={"Enter your nickname"}
        onChangeText={(nickName) => setNickName(nickName)}
        defaultValue={nickName}
      />
      {nickName == "" && (
        <Button title={"Enter a valid nickname"} type={"outline"} />
      )}
      {nickName != "" && (
        <Button
          title={"Let's start " + nickName}
          type={"outline"}
          onPress={() => navigation.navigate("Menu")}
        />
      )}
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
    marginTop: 20,
  },
  title: {
    flexDirection: "row",
    marginBottom: 20,
  },

  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    marginTop: 20,
    width: 200,
  },
  button: {},
});
