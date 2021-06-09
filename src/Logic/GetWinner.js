import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppContext from "../Context/AppContext";

export function GetWinner() {
  const { playerMove, opponentMove } = useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        {playerMove === opponentMove && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>Draw </Text>
        )}
        {playerMove === "PAPER" && opponentMove === "SCISSORS" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>Lose </Text>
        )}
        {playerMove === "ROCK" && opponentMove === "PAPER" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>Lose </Text>
        )}
        {playerMove === "SCISSORS" && opponentMove === "ROCK" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>Lose </Text>
        )}

        {playerMove === "SCISSORS" && opponentMove === "PAPER" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>Win </Text>
        )}
        {playerMove === "PAPER" && opponentMove === "ROCK" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>Win </Text>
        )}
        {playerMove === "ROCK" && opponentMove === "SCISSORS" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>Win </Text>
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  fixBackground: {
    backgroundColor: "#fff",
    marginTop: 50,
  },
});
