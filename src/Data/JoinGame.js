import React, { useEffect } from "react";
import { View } from "react-native";
import AppContext from "../Context/AppContext";

export function JoinGame() {
  const { gameId, opponentToken, setError } = React.useContext(AppContext);

  const url = `http://192.168.1.202:8080/games/join/${gameId}`;
  useEffect(() => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",
      headers: {
        token: opponentToken,
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      })

      .catch((error) => {
        setError(error);
        console.error(error);
      });
  }, []);
  return <View></View>;
}
