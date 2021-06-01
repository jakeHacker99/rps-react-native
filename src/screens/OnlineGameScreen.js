import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";

export function OnlineGameScreen() {
  const navigation = useContext(NavigationContext);
  const { playerMove, setPlayerMove } = useContext(AppContext);

  useEffect(() => {}, [setPlayerMove]);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={{ fontSize: 31, marginTop: 50 }}>Sten Sax Påse</Text>
        <Text
          style={{ fontSize: 22, marginTop: 15, marginLeft: 25, width: 200 }}
        >
          Välj sten sax eller påse för att spela
        </Text>
        <View style={styles.lowRow}>
          <Button
            title="Sten"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20, marginRight: 20 }}
            type={"outline"}
            onPress={() => {
              console.log("ROCK");
              setPlayerMove("ROCK");
              //   navigation.navigate("Winner");
            }}
          />
          <Button
            title="Sax"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20, marginRight: 20 }}
            type={"outline"}
            onPress={() => {
              console.log("SCISSORS");
              setPlayerMove("SCISSORS");

              //   navigation.navigate("OfflineWinner");
            }}
          />
          <Button
            title="Påse"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20, marginRight: 20 }}
            type={"outline"}
            onPress={() => {
              console.log("PAPER");
              setPlayerMove("PAPER");

              //   navigation.navigate("Winner");
            }}
          />
        </View>
        <Text
          style={{ fontSize: 22, marginTop: 15, marginLeft: 25, width: 200 }}
        >
          spelare valde : {playerMove}
        </Text>
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
});
