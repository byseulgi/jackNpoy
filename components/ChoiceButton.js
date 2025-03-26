import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const ChoiceButton = ({ title, onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: { backgroundColor: "#4CAF50", padding: 15, margin: 10, borderRadius: 10 },
  buttonText: { color: "white", fontSize: 18, textAlign: "center" },
});

export default ChoiceButton;
