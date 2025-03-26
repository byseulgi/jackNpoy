import React from "react";
import { View, Text, StyleSheet } from "react-native";

const ResultDisplay = ({ label, choice }) => (
  <View style={styles.container}>
    <Text style={styles.label}>{label}</Text>
    <Text style={styles.choice}>{choice || "Waiting..."}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: { alignItems: "center", marginBottom: 10 },
  label: { fontSize: 18, fontWeight: "bold" },
  choice: { fontSize: 20, color: "#333" },
});

export default ResultDisplay;
