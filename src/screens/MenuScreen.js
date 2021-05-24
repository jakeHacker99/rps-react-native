import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Button as Button1 } from "react-native-elements";

export function MenuScreen() {
  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={{ fontSize: 33, marginTop: 50 }}>RPS Jakob-Yazan</Text>
      </View>
      <View style={styles.box}>
        <Button1
          title="Spela Online"
          style={{ width: 150, marginTop: 150 }}
          type={"outline"}
        />

        <Button1
          title=" Spela Dator"
          style={{ width: 150, marginTop: 20 }}
          type={"outline"}
        />
      </View>

      <View style={styles.buttomRow}>
        <Button1
          title="Hem"
          size={15}
          style={{ height: 50, width: 70, marginTop: 20 }}
          type={"outline"}
        />
        <Button1
          title="Spel"
          size={15}
          style={{ height: 50, width: 70, marginTop: 20 }}
          type={"outline"}
        />
        <Button1
          title="Lista"
          size={15}
          style={{ height: 50, width: 70, marginTop: 20 }}
          type={"outline"}
        />
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
  },
  buttonColor: {
    backgroundColor: "#00ff00",
  },
});
