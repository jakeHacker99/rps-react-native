import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";

import { Button as Button1 } from "react-native-elements";

export function ListGamesScreen() {
  return (
    <View style={styles.fixBackground}>
      <View style={styles.row}>
        <Text style={styles.textStyle}>Yazan vann med: </Text>
        <Image style={styles.pic} source={require("../../assets/rock.gif")} />
      </View>

      <View style={styles.row}>
        <Text style={{ fontSize: 23, marginTop: 30 }}>Jakob vann med: </Text>
        <Image style={styles.pic} source={require("../../assets/paper.gif")} />
      </View>
      <View style={styles.row}>
        <Text style={{ fontSize: 23, marginTop: 20 }}>Jakob vann med: </Text>
        <Image
          style={styles.pic}
          source={require("../../assets/scissors.gif")}
        />
      </View>
      <View style={styles.row}>
        <Text style={styles.textStyle}>Det blev lika med: </Text>
        <Image style={styles.pic} source={require("../../assets/rock.gif")} />
      </View>
      <View style={styles.row}>
        <Text style={{ fontSize: 23, marginTop: 20 }}>Yazan vann med: </Text>
        <Image style={styles.pic} source={require("../../assets/paper.gif")} />
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
});
