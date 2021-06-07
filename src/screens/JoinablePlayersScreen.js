import React, { useContext, useEffect } from "react";

import { NavigationContext } from "@react-navigation/native";

import { StyleSheet, Text, View, FlatList } from "react-native";
import { Icon, Button } from "react-native-elements";
import { JoinGame } from "../Data/JoinGame";
import AppContext from "../Context/AppContext";

export function JoinablePlayersScreen() {
  const navigation = useContext(NavigationContext);
  const { setOpponentName } = React.useContext(AppContext);

  function handleName(key) {
    const name = "";
    data[key].name = name;
    setOpponentName(name);
  }

  const data = [
    { name: "Jake", key: "0" },
    { name: "Christian", key: "1" },
    { name: "Yazan", key: "2" },
  ];
  const renderItem = ({ item }) => (
    <View style={styles.row}>
      <Button
        style={{ flexDirection: "row" }}
        icon={<Icon name="sign-in" size={25} type="font-awesome" />}
        name="sign-in"
        type="font-awesome"
        onPress={() => {
          handleName(item.key);

          navigation.navigate("Online");
        }}
      />

      <Text style={{ fontSize: 23 }}> {item.name} </Text>
    </View>
  );

  return (
    <View style={styles.fixBackground}>
      <View style={styles.row}>
        <Text style={styles.h1}>Tillängliga spelare:</Text>
      </View>

      <View style={styles.row}>
        <View style={styles.left}>
          <FlatList
            style={{ height: 800, width: 300 }}
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.key}
          />
        </View>
      </View>
      <JoinGame />
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
    height: 40,
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
    marginBottom: 50,
  },
});
