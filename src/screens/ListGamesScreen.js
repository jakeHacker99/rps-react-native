import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import AppContext from "../Context/AppContext";

export function ListGamesScreen() {
  const { nickName, opponentName } = useContext(AppContext);

  const [game] = useState([
    { name: "Christian", key: "1" },
    { name: "Datorn", key: "2" },
  ]);

  return (
    <View style={styles.fixBackground}>
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

  pic: {
    width: 100,
    height: 100,
    marginTop: 50,
  },
});
