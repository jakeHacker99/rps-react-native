import React, { useContext } from "react";

import { NavigationContext } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";

import AppContext from "../Context/AppContext";
import joinGame from "../Data/JoinGame";
import createOpponentToken from "../Data/CreateOpponentToken";

export function JoinablePlayersScreen() {
  const navigation = useContext(NavigationContext);
  const { gameId, opponentToken, nickName, opponentName, setOpponentToken } =
    React.useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.box}>
        <Text style={styles.h1}>Tillängliga spelare:</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => {
              createOpponentToken(setOpponentToken);
              joinGame(opponentToken, gameId);
              navigation.navigate("Online");
            }}
          />
        </View>
        <Text style={{ fontSize: 23 }}>{opponentName} </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => {
              createOpponentToken(setOpponentToken);
              joinGame(opponentToken, gameId);
              navigation.navigate("Online");
            }}
          />
        </View>
        <Text style={{ fontSize: 23 }}>{nickName} </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => {
              createOpponentToken(setOpponentToken);
              joinGame(opponentToken, gameId);
              navigation.navigate("Online");
            }}
          />
        </View>
        <Text style={{ fontSize: 23 }}>raketen </Text>
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
  h1: {
    fontSize: 35,
    marginBottom: 150,
  },
});
