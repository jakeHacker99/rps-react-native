import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppContext from "../Context/AppContext";

export function OpponentMovement() {
  const { opponentToken, opponentMove, setOpponentMove } =
    React.useContext(AppContext);

  const url = `http://192.168.1.202:8080/games/move/${opponentMove}`;

  useEffect(() => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",

      headers: {
        token: opponentToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => {
        res.json();
        console.log(res);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text>{opponentMove}</Text>
    </View>
  );
}
