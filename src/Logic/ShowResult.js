import React, { useContext } from "react";
import { Text, Image, StyleSheet, View } from "react-native";

import AppContext from "../Context/AppContext";

export default function ShowResult() {
  const { playerMove, opponentName, opponentMove } = useContext(AppContext);

  return (
    <View style={styles.box}>
      <Text style={{ fontSize: 13, marginTop: 30 }}>
        {opponentName} valde: {opponentMove}
      </Text>
      {playerMove === "PAPER" && (
        <Image
          style={styles.pic}
          source={require("../../assets/" + "PAPER" + ".gif")}
        />
      )}
      {playerMove === "ROCK" && (
        <Image
          style={styles.pic}
          source={require("../../assets/" + "ROCK" + ".gif")}
        />
      )}
      {playerMove === "SCISSORS" && (
        <Image
          style={styles.pic}
          source={require("../../assets/" + "SCISSORS" + ".gif")}
        />
      )}
    </View>
  );
}
const styles = StyleSheet.create({
  box: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
  },

  pic: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
});
