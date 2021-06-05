import React, { useContext, useState } from "react";
import { StyleSheet, Text, View, TextInput } from "react-native";

import { Button, Image } from "react-native-elements";
import { NavigationContext } from "@react-navigation/native";
import AppContext from "../Context/AppContext";
import { CreateOpponentToken } from "../Data/CreateOpponentToken";
import getToken from "../Data/CreateToken";

export function StartScreen() {
  const navigation = useContext(NavigationContext);

  const { token, setToken, nickName, setNickName } = useContext(AppContext);

  const url = "http://192.168.1.202:8080/auth/token";

  // const getToken = () => {
  //   return fetch(url, {
  //     method: "GET",
  //     Accept: "application/json",

  //     headers: {
  //       "Content-Type": "application/json",
  //     },
  //   })
  //     .then((res) => res.text())
  //     .then((res) => {
  //       setToken(res);
  //       console.log("token: ", res);
  //     })

  //     .catch((error) => console.error(error));
  // };
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
        placeholder={"Ange ditt namn"}
        onChangeText={(nickName) => {
          setNickName(nickName);
        }}
        defaultValue={nickName}
      />
      {nickName.length < 3 && (
        <Button title={"Ange ett giltigt namn"} type={"outline"} />
      )}
      {nickName.length >= 3 && (
        <Button
          title={"Forsätt till meny"}
          type={"outline"}
          onPress={() => {
            getToken(setToken);
            navigation.navigate("Menu");
          }}
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
