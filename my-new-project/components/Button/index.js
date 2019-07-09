import React from "react";
import { View, TouchableOpacity, StyleSheet } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

function Button({ iconName, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <FontAwesome style={styles.button} name={iconName} color="white" />
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  button: {
    fontSize: 70
  }
});

export default Button;
