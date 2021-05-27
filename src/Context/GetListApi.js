import React, { useState, useEffect } from "react";
import {
  View,
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
} from "react-native";

export function GetListApi() {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      "https://cors-anywhere.herokuapp.com/https://reactnative.dev/movies.json",

      // visit  https://cors-anywhere.herokuapp.com/ and accept it to run is browser
      {
        method: "GET",

        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((response) => response.json())
      .then((json) => setData(json.movies))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={styles.container}>
      <View style={{ marginTop: 30 }}>
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
    alignItems: "center",
    justifyContent: "center",
  },
});
