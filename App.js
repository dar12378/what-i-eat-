import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  Text,
  View
} from "react-native";

import HomeScreen from "./screens/HomeScreen";

export default function App() {

  const [screen, setScreen] =
    useState("home");

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: "#F4F7FB"
      }}
    >

      <View
        style={{
          padding: 20,
          backgroundColor: "#fff"
        }}
      >
        <Text
          style={{
            fontSize: 32,
            fontWeight: "bold",
            color: "#2E7D32",
            textAlign: "right"
          }}
        >
          SmartPlate
        </Text>
      </View>

      <ScrollView
        contentContainerStyle={{
          padding: 20
        }}
      >
        {screen === "home" &&
          <HomeScreen
            setScreen={setScreen}
          />
        }
      </ScrollView>

    </SafeAreaView>
  );
}
