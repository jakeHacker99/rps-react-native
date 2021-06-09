import React, { useContext } from "react";
import { NavigationContext } from "@react-navigation/core";
import { StyleSheet, Text, View, ActivityIndicator } from "react-native";

import AppContext from "../Context/AppContext";
import { JoinGame } from "../Data/JoinGame";
import RockButton from "../components/RockButton";
import ScissorsButton from "../components/ScissorsButton";
import PaperButton from "../components/PaperButton";
export function OnlineGameScreen() {
  const navigation = useContext(NavigationContext);
  const { setPlayerMove, error } = useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      {error != "" && (
        <View>
          <ActivityIndicator size="large" color="#0000ff" />
          <h2>please start backend</h2>
        </View>
      )}

      {error === "" && (
        <View style={styles.container}>
          <Text style={styles.h1}>Sten Sax Påse</Text>
          <Text style={styles.h2}>Välj sten sax eller påse för att spela</Text>
          <View style={styles.lowRow}>
            <RockButton
              onPress={() => {
                setPlayerMove("ROCK");
                navigation.navigate("Online2");
              }}
            />
            <ScissorsButton
              onPress={() => {
                setPlayerMove("SCISSORS");
                navigation.navigate("Online2");
              }}
            />
            <PaperButton
              onPress={() => {
                setPlayerMove("PAPER");
                navigation.navigate("Online2");
              }}
            />
          </View>
        </View>
      )}
      <JoinGame />
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
});
