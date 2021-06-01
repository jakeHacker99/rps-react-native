import React, { useState, useEffect, useContext } from "react";
import { render } from "react-dom";
import { View, StyleSheet, Text, FlatList } from "react-native";
import AppContext from "../Context/AppContext";


export function StartGame() {

  const { token, setToken } = React.useContext(AppContext);
  const { game, setGame } =  React.useContext(AppContext);

 
  const url = "http://192.168.1.181:8080/games/start";

  console.log("before useeffect",token);
  useEffect((token) => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",

      headers: {
          token: token,
        "Content-Type": "application/json",
      },
    })
      .then(res => res.json())
      // .then(json =>  setGame(json)) fix it
      .catch((error) => console.error(error));
      console.log("game", game)
  }, []);

  return   <View>
  <Text>{JSON.stringify(game)}</Text>
  <Text>{game}</Text>
 
    </View>
 
  
};
