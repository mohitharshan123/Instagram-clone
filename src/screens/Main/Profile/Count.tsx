import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";

type CountProps = {
  count: number | string;
  label: string;
};

const Count: React.FC<CountProps> = ({ label, count }) => (
  <TouchableOpacity style={styles.container} activeOpacity={0.8}>
    <Text style={styles.count}>{count}</Text>
    <Text style={styles.label}>{label}</Text>
  </TouchableOpacity>
);

export default Count;

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  count: { fontSize: 18, color: "white", fontWeight: "bold" },
  label: { fontSize: 13, color: "white", fontWeight: "bold" },
});
