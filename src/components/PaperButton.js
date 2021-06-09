import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

function PaperButton({ onPress }) {
  return (
    <View>
      <TouchableOpacity onPress={onPress} style={styles.buttonStyle}>
        <Text style={styles.textStyle}>Påse</Text>
      </TouchableOpacity>
    </View>
  );
}
export default PaperButton;

const styles = StyleSheet.create({
  buttonStyle: {
    borderWidth: 1,
    borderColor: "#338dff",
    borderRadius: 5,
    marginTop: 20,
    marginRight: 20,
    width: 70,
    height: 50,
    shadowColor: "#338dff",
    shadowOpacity: 0.5,
    shadowRadius: 10,
  },

  textStyle: {
    justifyContent: "center",
    textAlign: "center",
    color: "#338dff",
    fontSize: 18,
    fontWeight: "500",
    paddingTop: 10,
    paddingBottom: 10,
  },
});
