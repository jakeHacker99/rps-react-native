import React from "react";
import { TouchableWithoutFeedback } from "react-native";
import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";

export function JoinablePlayersScreen() {
  return (
    <View style={styles.fixBackground}>
      <View style={styles.box}>
        <Text style={{ fontSize: 35 }}>Tillängliga spelare: </Text>
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
    justifyContent: "center",
    alignItems: "center",
    alignItems: "center",
    height: 120,
  },
  box: {
    alignItems: "center",
    alignContent: "center",
    justifyContent: "center",
    flexDirection: "column",
    textAlignVertical: "middle",
  },
  buttomRow: {
    flexDirection: "row",
    marginTop: 50,
    justifyContent: "center",
    marginLeft: 20,
  },
  pic: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  textStyle: {
    fontSize: 23,
    marginTop: 30,
  },
  left: {
    marginRight: 20,
  },
});
