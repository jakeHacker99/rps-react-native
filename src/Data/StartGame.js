import React, { useEffect } from "react";
import { View } from "react-native";
import AppContext from "../Context/AppContext";

export function StartGame() {
  const { token, setGameId } = React.useContext(AppContext);

  const url = "http://192.168.1.181:8080/games/start";

  useEffect(() => {
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
        setTimeout(() => {
          console.log(res);
        }, 3000);
        let gameId = JSON.parse(JSON.stringify(res.id));
        setGameId(gameId);
      })

      .catch((error) => console.error(error));
  }, []);

  return <View></View>;
}
