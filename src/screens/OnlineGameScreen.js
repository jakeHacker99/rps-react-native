import React, { useContext, useEffect } from "react";
import { NavigationContext } from "@react-navigation/core";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";
import changePlayermove from "../Data/PlayerMove";

export function OnlineGameScreen() {
  const navigation = useContext(NavigationContext);
  const { playerMove, setPlayerMove, token } = useContext(AppContext);

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
              console.log("playermove: ", playerMove, setPlayerMove);
              changePlayermove(token, playerMove);
              console.log(playerMove);

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
              changePlayermove(token, playerMove, setPlayerMove);

              console.log(playerMove);

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
              changePlayermove(token, playerMove, setPlayerMove);
              console.log(playerMove);

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
