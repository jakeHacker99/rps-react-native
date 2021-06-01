import React, { useState, useEffect, useContext } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ThemeContext } from "react-native-elements";
import AppContext from "../Context/AppContext";

export function CreateToken() {
  const { setToken, setNickName } = useContext(AppContext);

  const url = "http://192.168.1.202:8080/tokens/new";

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
        console.log("token: ", res);
      })

      .catch((error) => console.error(error));
  }, [setNickName]);

  return <Text> </Text>;
}
