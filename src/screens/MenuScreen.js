import React from "react";
import { StyleSheet, Text, View } from "react-native";

import {
  Button as Button1,
  Button2,
  Button3,
  Button4,
  Button5,
} from "react-native-elements";

export function MenuScreen() {
  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={{ fontSize: 33, marginTop: 50 }}>RPS Jakob-Yazan</Text>
      </View>
      <View style={styles.box}></View>
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
  },
  row: {
    flexDirection: "row",
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
  },
  buttonColor: {
    backgroundColor: "#00ff00",
  },
});
