import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";
import { PlayerMove } from "../Data/PlayerMove";
import OurButton from "../components/OurButton";

export function OnlineGameScreenOpponent() {
  const navigation = useContext(NavigationContext);

  const { setOpponentMove, opponentName } = useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={styles.h1}>Sten Sax Påse</Text>
        <Text style={styles.h2}>Välj sten sax eller påse för att spela</Text>
        <View style={styles.lowRow}>
        <OurButton
            title="Sten"
            onPress={() => {
              setOpponentMove("ROCK");
              navigation.navigate("Winner2");
            }}
          />
          <OurButton
            title="Sax"
            onPress={() => {
              setOpponentMove("SCISSORS");
              navigation.navigate("Winner2");
            }}
          />
          <OurButton
            title="Påse"
            onPress={() => {
              setOpponentMove("PAPER");
              navigation.navigate("Winner2");
            }}
          />
        </View>
        <Text style={styles.opponentName}> {opponentName}s tur </Text>
      </View>
      <PlayerMove />
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

  lowRow: {
    flexDirection: "row",
    marginTop: 120,
    justifyContent: "center",
    marginBottom: 150,
    marginLeft: 10,
    backgroundColor: "#fff",
  },
  box: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  h1: {
    fontSize: 31,
    marginTop: 50,
    marginBottom: 50,
  },
  h2: {
    fontSize: 22,
    marginLeft: 25,
    width: 200,
  },
  opponentName: {
    fontSize: 22,
    marginLeft: 60,
    width: 200,
    justifyContent: "center",
  },
});
