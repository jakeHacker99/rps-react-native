import React, { useState, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";

export function CreateToken() {
  const [token, setToken] = useState("");

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
  }, []);

  return <Text></Text>;
}
