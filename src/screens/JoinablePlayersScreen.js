import React, { useContext } from "react";

import { NavigationContext } from "@react-navigation/native";

import { StyleSheet, Text, View } from "react-native";
import { Icon, Button } from "react-native-elements";

import AppContext from "../Context/AppContext";

export function JoinablePlayersScreen() {
  const navigation = useContext(NavigationContext);
  const name = useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.box}>
        <Text style={{ fontSize: 35, marginBottom: 150 }}>
          Tillängliga spelare:
        </Text>
      </View>

      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => navigation.navigate("Online")}
          />
        </View>
        <Text style={{ fontSize: 23 }}>Pelle </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => navigation.navigate("Online")}
          />
        </View>
        <Text style={{ fontSize: 23 }}>Lina </Text>
      </View>
      <View style={styles.row}>
        <View style={styles.left}>
          <Button
            icon={<Icon name="sign-in" size={25} type="font-awesome" />}
            name="sign-in"
            type="font-awesome"
            onPress={() => navigation.navigate("Online")}
          />
        </View>
        <Text style={{ fontSize: 23 }}>Sture </Text>
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
