import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

const All = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>Text 1</Text>
      <Text style={styles.text}>Text 2</Text>
      <Text style={styles.text}>Text 3</Text>
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

export default All;
