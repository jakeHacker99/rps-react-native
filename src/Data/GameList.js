import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppContext from "../Context/AppContext";

export function GameList() {
  const { token, setToken } = React.useContext(AppContext);

  const url = "http://192.168.1.181:8080/games";
  console.log("before useEffect", token);
  useEffect((token) => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",

      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        setToken(res);
        console.log("token: ", res);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>{token}</Text>
    </View>
  );
}
