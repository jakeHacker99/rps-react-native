import React, { useEffect } from "react";
import { View } from "react-native";
import AppContext from "../Context/AppContext";

export function CreateOpponentToken() {
  const { setOpponentToken } = React.useContext(AppContext);

  const url = "http://192.168.1.181:8080/auth/token";

  useEffect(() => {
    fetch(url, {
      method: "GET",
      Accept: "application/json",

      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.text())
      .then((res) => {
        setOpponentToken(res);
        setTimeout(() => {
          console.log("opptoken: ", res);
        }, 5000);
      })

      .catch((error) => console.error(error));
  }, []);

  return <View></View>;
}
