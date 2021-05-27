<<<<<<< HEAD
import React, { useState } from "react";
import { StyleSheet, View } from "react-native";
=======
import React, { useState,useEffect, createContext } from "react";
import { StyleSheet, View, ActivityIndicator, FlatList, Text } from "react-native";
>>>>>>> c71f81d21aa5f023025f7a3bad746de5a0164fe2

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

<<<<<<< HEAD
import { FetchTesting } from "./src/Data/FetchTesting";
=======
import { StartScreen } from "./src/screens/StartScreen";
import { MenuScreen } from "./src/screens/MenuScreen";
import { InGameScreen } from "./src/screens/InGameScreen";
import { WinnerScreen } from "./src/screens/WinnerScreen";
import { PcWinnerScreen } from "./src/screens/PcWinnerScreen";
>>>>>>> c71f81d21aa5f023025f7a3bad746de5a0164fe2



import { ListGamesScreen } from "./src/screens/ListGamesScreen";
import { JoinablePlayersScreen } from "./src/screens/JoinablePlayersScreen";

import AppContext from "./src/Context/AppContext";

function Start() {
  // const [isLoading, setLoading] = useState(true);
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch('https://reactnative.dev/movies.json',
  //   {
  //   method: 'Get',
  //   headers: {
  //   Accept: 'application/json',
  //   // Token: "",
  //   'Content-Type': 'application/json'
  // }}, 
  //   )
    
  //     .then((response) => response.json())
  //     .then((json) => setData(json.movies))
  //     .catch((error) => console.error(error))
  //     .finally(() => setLoading(false));
  // }, []);
  return (
    <View style={styles.container}>
      <StartScreen />
<<<<<<< HEAD
      <FetchTesting />
=======

      {/* {isLoading ? <ActivityIndicator/> : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <Text>{item.title}, {item.releaseYear}</Text>
          )}
        />
      )} */}
     
>>>>>>> c71f81d21aa5f023025f7a3bad746de5a0164fe2
    </View>
  );
}

function History() {
  return (
    <View style={styles.container}>
      <ListGamesScreen />
    </View>
  );
}

function Joina() {
  return (
    <View style={styles.container}>
      <JoinablePlayersScreen />
    </View>
  );
}

function Menu() {
  return (
    <View style={styles.container}>
      <MenuScreen />
    </View>
  );
}

function Online() {
  return (
    <View style={styles.container}>
      <InGameScreen />
    </View>
  );
}

function Offline() {
  return (
    <View style={styles.container}>
      <InGameScreen />
    </View>
  );
}

function Winner() {
  return (
    <View style={styles.container}>
      <WinnerScreen />
    </View>
  );
}
function OfflineWinner() {
  return (
    <View style={styles.container}>
      <PcWinnerScreen />
    </View>
  );
}
const Stack = createStackNavigator();

const TokenContex = createContext();

export default function App() {

  const [token, setToken] = useState("");
  console.log("token1",token)
  useEffect(() => {
        fetch('http://localhost:8080/tokens/new')
        .then(response => response.text())
        .then(newToken => {setToken(newToken); console.log("token",token)});
        
      }, );[]

      console.log("token2",token)

  const [nickName, setNickName] = useState("Jakob vs ...");


  return (
    <TokenContex.Provider value={token}>
    <AppContext.Provider value={nickName}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Start" component={Start} />
          <Stack.Screen name="Menu" component={Menu} />
          <Stack.Screen name="Offline" component={Offline} />
          <Stack.Screen name="Online" component={Online} />

          <Stack.Screen name="OfflineWinner" component={OfflineWinner} />
          <Stack.Screen name="Winner" component={Winner} />

          <Stack.Screen name="Joina" component={Joina} />
          <Stack.Screen name="History" component={History} />
        </Stack.Navigator>
      </NavigationContainer>
    </AppContext.Provider>
    </TokenContex.Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
