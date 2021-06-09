import React, { useEffect, useContext, useState } from "react";
import { Platform } from "react-native";
import { View, StyleSheet, Text, ActivityIndicator } from "react-native";
import AppContext from "../Context/AppContext";

export function JoinGame() {
  const { gameId, opponentToken, setError, error } =
    React.useContext(AppContext);

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
        console.log(res);
      })

      .catch((error) => {
        setError(error);
        console.error(error);
      });
  }, []);
  return <View style={styles.container}></View>;
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    marginRight: Platform.OS === "android" ? "250" : "250",
  },
});
