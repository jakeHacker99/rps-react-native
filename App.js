import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import { Button as Button1 } from "react-native-elements";

import { StartScreen } from "./src/screens/StartScreen";

class Menu extends React.Component {
  handleClick = () => {
    console.log("this is :", this);
  };

  render() {
    return (
      <View style={styles.fixBackground}>
        <View style={styles.container}>
          <Text style={{ fontSize: 33, marginTop: 50 }}>RPS Jakob-Yazan</Text>
        </View>
        <View style={styles.box}>
          <Button1
            title="Spela Online"
            style={{ width: 150, marginTop: 150 }}
            type={"outline"}
          />
          <Button1
            title=" Spela Dator"
            style={{ width: 150, marginTop: 20 }}
            type={"outline"}
            onPress={this.handleClick}
          />
        </View>

        <View style={styles.buttomRow}>
          <Button1
            title="Hem"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
          />
          <Button1
            title="Spel"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
          />
          <Button1
            title="Lista"
            size={15}
            style={{ height: 50, width: 70, marginTop: 20 }}
            type={"outline"}
          />
        </View>
      </View>
    );
  }
}

function Start({ navigation }) {
  return (
    <>
      <StartScreen />
      <Button1
        title="Start Playing"
        type={"outline"}
        style={styles.container}
        onPress={() => navigation.navigate("Menu")}
      />
    </>
  );
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Start" component={Start} />
      <Stack.Screen name="Menu" component={Menu} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Start" component={Start} />
        <Stack.Screen name="Menu" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
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
});
