import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";
import changeOpponentMove from "../Data/OpponentMove";

export function OnlineGameScreenOpponent() {
  const navigation = useContext(NavigationContext);

  const { setOpponentMove, opponentName, opponentToken } =
    useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={styles.h1}>Sten Sax Påse</Text>
        <Text style={styles.h2}>Välj sten sax eller påse för att spela</Text>
        <View style={styles.lowRow}>
          <Button
            title="Sten"
            size={15}
            style={styles.styleButton}
            type={"outline"}
            onPress={() => {
              setOpponentMove("ROCK");
              changeOpponentMove(setOpponentMove, opponentToken);

              navigation.navigate("Winner2");
            }}
          />
          <Button
            title="Sax"
            size={15}
            style={styles.styleButton}
            type={"outline"}
            onPress={() => {
              setOpponentMove("SCISSORS");
              changeOpponentMove(setOpponentMove, opponentToken);

              navigation.navigate("Winner2");
            }}
          />
          <Button
            title="Påse"
            size={25}
            style={styles.styleButton}
            type={"outline"}
            onPress={() => {
              setOpponentMove("PAPER");
              changeOpponentMove(setOpponentMove, opponentToken);

              navigation.navigate("Winner2");
            }}
          />
        </View>
        <Text style={styles.opponentName}> {opponentName}s tur </Text>
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

  styleButton: {
    height: 50,
    width: 70,
    marginTop: 20,
    marginRight: 20,
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
    marginLeft: 90,
    width: 200,
  },
});
