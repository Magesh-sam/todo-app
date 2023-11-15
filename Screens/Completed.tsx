import { SafeAreaView, StatusBar } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";

import TodoList from "../Components/TodoList";
import { useSelector } from "react-redux";
import { RootState } from "../redux/store";

const Completed = () => {
  const todos = useSelector((state: RootState) => state.todos);
  const completedTodos = todos.filter((todo) => todo.completed);
  return (
    <SafeAreaView style={styles.container}>
      <TodoList todos={completedTodos} />
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

export default Completed;
