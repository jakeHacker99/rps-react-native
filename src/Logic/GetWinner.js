import React, { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";

import AppContext from "../Context/AppContext";

import * as Localization from "expo-localization";
import i18n from "i18n-js";

export function GetWinner() {
  i18n.translations = {
    sv: {
      win: "Vinst",
      lose: "Förlust",
      draw: "Lika",
    },
    en: {
      win: "Win",
      lose: "Lose",
      draw: "Draw",
    },
    ar: {
      win: "ينتصر",
      lose: "تخسر",
      draw: "مساو",
    },
  };
  i18n.locale = Localization.locale;
  i18n.fallbacks = true;

  const { playerMove, opponentMove } = useContext(AppContext);

  return (
    <View style={styles.fixBackground}>
      <View style={styles.container}>
        {playerMove === opponentMove && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>{i18n.t("draw")}</Text>
        )}
        {playerMove === "PAPER" && opponentMove === "SCISSORS" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>{i18n.t("lose")}</Text>
        )}
        {playerMove === "ROCK" && opponentMove === "PAPER" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>{i18n.t("lose")}</Text>
        )}
        {playerMove === "SCISSORS" && opponentMove === "ROCK" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>{i18n.t("lose")}</Text>
        )}

        {playerMove === "SCISSORS" && opponentMove === "PAPER" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>{i18n.t("win")} </Text>
        )}
        {playerMove === "PAPER" && opponentMove === "ROCK" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>{i18n.t("win")} </Text>
        )}
        {playerMove === "ROCK" && opponentMove === "SCISSORS" && (
          <Text style={{ fontSize: 33, marginTop: 150 }}>{i18n.t("win")} </Text>
        )}
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
});
