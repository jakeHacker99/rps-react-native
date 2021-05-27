import React, { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { StyleSheet, Text, View, Image } from "react-native";

import { Button } from "react-native-elements";

export function PcWinnerScreen() {
  const navigation = useContext(NavigationContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={{ fontSize: 33, marginTop: 150 }}>Dator vann med: </Text>
        <Image style={styles.pic} source={require("../../assets/paper.gif")} />
      </View>

      <View style={styles.buttomRow}>
        <Button
          title="Spela Igen"
          size={25}
          style={{ height: 70, width: 70, marginTop: 20, marginRight: 20 }}
          type={"outline"}
          onPress={() => navigation.navigate("Offline")}
        />
        <Button
          title="Avlsuta Spel"
          size={15}
          style={{ height: 70, width: 70, marginTop: 20, marginRight: 20 }}
          type={"outline"}
          onPress={() => navigation.navigate("Start")}
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
    marginTop: 50,
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
  pic: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
});
