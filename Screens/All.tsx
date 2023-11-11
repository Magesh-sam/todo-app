import { View, Text, SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import TodoList from "../Components/TodoList";

const All = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TodoList />
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
    paddingTop: StatusBar.currentHeight,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default All;
