import React, { useContext } from "react";
import { NavigationContext } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";
import OurButton from "../components/OurButton";

export function OfflineGameScreen() {
  const navigation = useContext(NavigationContext);
  const { playerMove, setPlayerMove, setOpponentMove } = useContext(AppContext);
  const availableMoves = ["PAPER", "SCISSORS", "ROCK"];

  function randomizeMove() {
    const randomNumber = Math.random() * 3;
    const index = Math.floor(randomNumber);
    return availableMoves[index];
  }

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>Sten Sax Påse</Text>
        <Text style={styles.textStyle}>
          Välj sten sax eller påse för att spela
        </Text>
        <View style={styles.lowRow}>
        <OurButton
            title="Sten"
            onPress={() => {
              setPlayerMove("ROCK");
              setOpponentMove(randomizeMove());
              navigation.navigate("OfflineWinner");
            }}
          />
          <OurButton
            title="Sax"
            onPress={() => {
              setPlayerMove("SCISSORS");
              setOpponentMove(randomizeMove());
              navigation.navigate("OfflineWinner");
            }}
          />
          <OurButton
            title="Påse"
            onPress={() => {
              setPlayerMove("PAPER");
              setOpponentMove(randomizeMove());
              navigation.navigate("OfflineWinner");
            }}
          />
        </View>
        <Text style={styles.textStyle}></Text>
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
    marginTop: 150,
  },

  lowRow: {
    flexDirection: "row",
    marginTop: 120,
    justifyContent: "center",
    marginBottom: 250,
    marginLeft: 20,
    backgroundColor: "#fff",
  },
  box: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },
  buttomRow: {
    flexDirection: "row",
    marginTop: 120,
    justifyContent: "center",
    marginBottom: 250,
    marginLeft: 20,
  },
  styleButton: {
    height: 50,
    width: 70,
    marginTop: 20,
    marginRight: 20,
  },
  textStyle: {
    fontSize: 22,
    marginTop: 15,
    marginLeft: 25,
    width: 200,
  },
  title: {
    fontSize: 31,
    marginTop: 50,
  },
});
