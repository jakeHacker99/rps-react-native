import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function RockButton({ onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Sten</Text>
      </TouchableOpacity>
    </View>
  );
}
export default RockButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1,
    borderColor: "#ffcc00",
    borderRadius: 5,
    marginTop: 20,
    marginRight: 20,
    width: 70,
    height: 50,
    shadowColor: "#ffcc00",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  textStyle: {
    justifyContent: "center",
    textAlign: "center",
    color: "#ffcc00",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
