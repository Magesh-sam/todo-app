import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const Pending = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Task 1 Pending</Text>
      <Text style={styles.text}>Task 3 Pending</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    rowGap: 20,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default Pending;
