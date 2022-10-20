import { useNavigation } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, TouchableOpacity, View, Text } from "react-native";

export const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity>
        <Text className="text-red-700">
          Open up App.tsx to start working on your app!
        </Text>
        <StatusBar style="auto" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
