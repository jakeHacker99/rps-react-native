import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppContext from "../Context/AppContext";

export function JoinGame() {
  const { token, setToken } = React.useContext(AppContext);
  const { gameId, setGameId } = React.useContext(AppContext);

  const url = "http://192.168.1.181:8080/games/join";
  console.log("before useEffect",token);
  useEffect((token,gameId) => {
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
        setGameId(res);
        console.log("gameId: ", res);
      })

      .catch((error) => console.error(error));
  }, []);

  return <View>
  <Text>{gameId}</Text>
  </View>
}
