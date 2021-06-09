import React, { useEffect } from "react";
import { View, Text } from "react-native";
import AppContext from "../Context/AppContext";

export function PlayerMove() {
  const {
    token,
    playerMove,
    setPlayerMove,
    setNickName,
    nickName,
    setOpponentName,
  } = React.useContext(AppContext);

  const url = `http://192.168.1.202:8080/games/move/${playerMove}`;

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
        setPlayerMove(playerMove);
        setNickName(nickName);
        setOpponentName("Christian");

        console.log(res);
      })

      .catch((error) => console.error(error));
  }, []);

  return (
    <View>
      <Text></Text>
    </View>
  );
}
