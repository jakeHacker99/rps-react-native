import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AppContext from "../Context/AppContext";

export function StartGame() {
  const { token } = React.useContext(AppContext);
  const { game, setGame } = React.useContext(AppContext);

  const url = "http://192.168.1.202:8080/games/start";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",

      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })

      .catch((error) => console.error(error));
  }, []);

  return <View>{/* <Text>{JSON.stringify(game)}</Text> */}</View>;
}
