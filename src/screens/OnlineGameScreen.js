import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";
export function OnlineGameScreen() {
  const navigation = useContext(NavigationContext);
  const { setPlayerMove } = useContext(AppContext);

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
              setPlayerMove("ROCK");

              navigation.navigate("Online2");
            }}
          />
          <Button
            title="Sax"
            size={15}
            style={styles.styleButton}
            type={"outline"}
            onPress={() => {
              setPlayerMove("SCISSORS");

              navigation.navigate("Online2");
            }}
          />
          <Button
            title="Påse"
            size={15}
            style={styles.styleButton}
            type={"outline"}
            onPress={() => {
              setPlayerMove("PAPER");

              navigation.navigate("Online2");
            }}
          />
        </View>
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
});
