import React from "react";
import { View, Text } from "react-native";
import Card from "../components/Card";

export default function HomeScreen({
  setScreen
}) {
  return (
    <View>

      <Text
        style={{
          fontSize: 28,
          fontWeight: "bold",
          textAlign: "right",
          marginBottom: 20
        }}
      >
        מה תרצה לעשות?
      </Text>

      <Card
        emoji="🍽️"
        title="הוסף מנה"
        text="כתוב מה אכלת"
        onPress={() => setScreen("add")}
      />

      <Card
        emoji="👥"
        title="קהילה"
        text="ראה מנות של משתמשים"
        onPress={() => setScreen("community")}
      />

      <Card
        emoji="👤"
        title="פרופיל"
        text="מידע אישי"
        onPress={() => setScreen("profile")}
      />

    </View>
  );
}
