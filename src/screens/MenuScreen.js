import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContext } from "@react-navigation/native";

import { Button } from "react-native-elements";
import AppContext from "../Context/AppContext";

export function MenuScreen() {
  const navigation = useContext(NavigationContext);
  const { nickName } = useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        <Text style={styles.title}>RPS ➣  {nickName}</Text>
      </View>
      <View style={styles.box}>
        <Button
          title="Spela Online"
          style={styles.onlineButton}
          type={"outline"}
          onPress={() => navigation.navigate("Joina")}
        />

        <Button
          title=" Spela Dator"
          style={styles.offlineButton}
          type={"outline"}
          onPress={() => navigation.navigate("Offline")}
        />

        <View style={styles.buttomRow}>
          <Button
            title="Hem"
            size={15}
            style={styles.buttonUnder}
            type={"outline"}
            onPress={() => navigation.navigate("Start")}
          />

          <Button
            title="Historik"
            size={15}
            style={styles.buttonUnder}
            type={"outline"}
            onPress={() => navigation.navigate("History")}
          />
        </View>
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
  title:{
    fontSize: 33,
    marginTop: 50,
  },
  buttonUnder:{
    height: 50,
    width: 70,
    marginTop: 20
  },
  onlineButton:{
    width: 150,
    marginTop: 150
  },
  offlineButton:{
    width: 150,
    marginTop: 20
  }
});
