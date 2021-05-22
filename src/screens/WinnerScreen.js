import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Button as Button1 } from "react-native-elements";

export function WinnerScreen() {
  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={{ fontSize: 33, marginTop: 50 }}>Yazan vann med: </Text>
        <Image style={styles.pic} source={require("../../assets/rock.gif")} />
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
    marginBottom: 250,
    marginLeft: 20,
  },
  pic: {
    width: 200,
    height: 200,
    marginTop: 40,
  },
});
