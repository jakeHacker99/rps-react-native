import React, { useState } from "react";
import { StyleSheet, Text, View, Image, ScrollView } from "react-native";

import AppContext from "../Context/AppContext";

export function ListGamesScreen() {
  const { opponentName } = React.useContext(AppContext);

  const [game] = useState([{ name: opponentName, key: "1" }]);

  return (
    <View style={styles.fixBackground}>
      {opponentName != "Datorn" && (
        <ScrollView>
          {game.map((item) => (
            <View key={item.key} style={styles.row}>
              <Text style={{ fontSize: 23, marginTop: 30 }}>
                {item.name} vann med:
              </Text>

              {item.key % 2 == 0 && (
                <Image
                  style={styles.pic}
                  source={require("../../assets/PAPER.gif")}
                />
              )}
              {item.key % 2 != 0 && (
                <Image
                  style={styles.pic}
                  source={require("../../assets/ROCK.gif")}
                />
              )}
            </View>
          ))}
        </ScrollView>
      )}
      {opponentName === "Datorn" && (
        <View>
          <Text styles={styles.h2}>Ingen Online Historik</Text>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
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

  pic: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
  h2: {
    fontSize: 22,
    marginLeft: 25,
    width: 200,
  },
});
