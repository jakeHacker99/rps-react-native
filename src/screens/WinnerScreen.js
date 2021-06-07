import React, { useContext } from "react";
import { NavigationContext } from "@react-navigation/native";

import { StyleSheet, Text, View, Image } from "react-native";
import { GetWinner } from "../Logic/GetWinner";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";
import ShowResult from "../Logic/ShowResult";

export function WinnerScreen() {
  const navigation = useContext(NavigationContext);

  const { setNickName, playerMove, opponentName, opponentMove } =
    useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <GetWinner />

        <ShowResult />
      </View>

      <View style={styles.buttomRow}>
        <Button
          title="Spela Igen"
          size={25}
          style={styles.styleButton}
          type={"outline"}
          onPress={() => {
            {
              Platform.OS === "android"
                ? (setNickName(""), navigation.navigate("Start"))
                : (setOpponentName("dator2"),
                  setNickName(""),
                  window.location.reload());
            }
          }}
        />
        <Button
          title="Avlsuta Spel"
          size={15}
          style={styles.styleButton}
          type={"outline"}
          onPress={() => {
            setNickName(""), navigation.navigate("Start");
          }}
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
  styleButton: {
    height: 70,
    width: 70,
    marginTop: 20,
    marginRight: 20,
  },
});
