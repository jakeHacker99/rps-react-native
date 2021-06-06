import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import AppContext from "../Context/AppContext";

export function OpponentMove() {
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
      .then((res) => res.json())
      .then((res) => {
        setOpponentMove(opponentMove);

        console.log("game: ", res);
      })

      .catch((error) => console.error(error));
  }, [opponentMove]);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
