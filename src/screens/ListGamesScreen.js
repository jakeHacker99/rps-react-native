import React, { useContext, useState } from "react";
import { ScrollView } from "react-native";
import { StyleSheet, Text, View, Image } from "react-native";
import AppContext from "../Context/AppContext";

export function ListGamesScreen() {
  const { nickName, opponentName } = useContext(AppContext);

  const [game, setGame] = useState([
    { name: 'Jakob', key: '1' },
    { name: 'Yazan', key: '2' },
    { name: 'Nicklas', key: '3' },
    { name: 'Philip', key: '4' },
    { name: 'David', key: '5' },
  ])

  return (
    <View style={styles.fixBackground}>
      <ScrollView >
        {
          game.map(item => (
            <View key={item.key} style={styles.row}>
              <Text style={{ fontSize: 23, marginTop: 30 }}>
               {item.name} vann med:{" "}
               </Text>
              <Image style={styles.pic} source={require("../../assets/rock.gif")} />
            </View>

          ))
        }

      </ScrollView>

      {/* <View style={styles.row}>
        <Text style={styles.textStyle}>{nickName} vann med: </Text>
        <Image style={styles.pic} source={require("../../assets/rock.gif")} />
      </View>

      <View style={styles.row}>
        <Text style={{ fontSize: 23, marginTop: 30 }}>
          {opponentName} vann med:{" "}
        </Text>
        <Image style={styles.pic} source={require("../../assets/paper.gif")} />
      </View>
      <View style={styles.row}>
        <Text style={{ fontSize: 23, marginTop: 20 }}>
          {opponentName} vann med:{" "}
        </Text>
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
        <Text style={{ fontSize: 23, marginTop: 20 }}>
          {nickName} vann med:{" "}
        </Text>
        <Image style={styles.pic} source={require("../../assets/paper.gif")} />
      </View> */}
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
