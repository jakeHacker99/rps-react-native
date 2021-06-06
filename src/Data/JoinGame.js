import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { colors } from "react-native-elements";
import AppContext from "../Context/AppContext";

export function JoinGame() {
  const { gameId, opponentToken } = React.useContext(AppContext);

  const url = `http://192.168.1.202:8080/games/join/${gameId}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",
      headers: {
        token: opponentToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => {
          console.log(res);
        }, 7000);

        // let gameId = JSON.parse(JSON.stringify(res.id));
      })

      .catch((error) => console.error(error));
  }, []);
  return <View>{/* <Text>{gameId}</Text> */}</View>;
}
