import { View, Text } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const All = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>All</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default All;
