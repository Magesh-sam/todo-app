import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Completed = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Task 2 Completed</Text>
    </SafeAreaView>
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

export default Completed;
