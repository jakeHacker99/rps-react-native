import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button } from "react-native-elements";

export function InGameScreen() {
  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={{ fontSize: 31, marginTop: 50 }}>Sten Sax Påse</Text>
        <Text
          style={{ fontSize: 22, marginTop: 15, marginLeft: 25, width: 200 }}
        >
          Välj sten sax eller påse för att spela
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
    marginBottom: 250,
    marginLeft: 20,
  },
});
