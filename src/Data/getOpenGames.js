import React, { useEffect } from "react";
import { View } from "react-native";
import AppContext from "../Context/AppContext";

export function GetOpenGames() {
  const { token, setToken } = React.useContext(AppContext);
  const { gameId, setGameId } = React.useContext(AppContext);

  const url = "http://192.168.1.202:8080/games";
  useEffect((sign) => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",

      headers: {
        token: token,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log("open games: ", res);
      })

      .catch((error) => console.error(error));
  }, []);

  return <View></View>;
}
