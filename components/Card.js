import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

export default function Card({
  emoji,
  title,
  text,
  onPress
}) {
  return (
    <TouchableOpacity style={styles.card} onPress={onPress}>
      <Text style={styles.emoji}>{emoji}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 25,
    padding: 20,
    marginBottom: 15
  },

  emoji: {
    fontSize: 38,
    textAlign: "right"
  },

  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "right"
  },

  text: {
    textAlign: "right"
  }
});
