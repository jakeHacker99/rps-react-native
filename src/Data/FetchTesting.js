import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

export function FetchTesting() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const url = "http://localhost:8080/tokens/new";

  useEffect(() => {
    fetch(
      url,

      {
        method: "GET",
        Accept: "application/json",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.text())
      .then((res) => console.log("token: ", res))

      // .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View>
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <FlatList
            data={data}
            keyExtractor={({ id }, index) => id}
            renderItem={({ item }) => (
              <Text>
                {item.title}, {item.releaseYear}
              </Text>
            )}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
    height: 100,
  },
});
