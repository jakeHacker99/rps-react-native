import React, { useEffect } from "react";
import { View } from "react-native";
import AppContext from "../Context/AppContext";

export function CreateToken() {
  const { token, setToken } = React.useContext(AppContext);

  const url = "http://192.168.1.202:8080/auth/token";

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
        setToken(res);
        setTimeout(() => {
          console.log("token: ", res);
        }, 3000);
      })

      .catch((error) => console.error(error));
  }, []);

  return <View></View>;
}
