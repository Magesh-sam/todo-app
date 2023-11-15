import { StyleSheet, View, Text, StatusBar } from "react-native";
import React from "react";
import TodoItem from "./TodoItem";
import { FlatList } from "react-native";
import { todoItemProps } from "../types/types";

const TodoList = ({ todos }: { todos: todoItemProps[] }) => {
  return (
    <FlatList
      style={{ flex: 1, width: "100%", marginBottom: 40, height: "100%" }}
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(todo) => todo.id.toString()}
      ListEmptyComponent={
        <View style={styles.emptyContainer}>
          <Text style={styles.emptyText}>No Todos</Text>
        </View>
      }
    />
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    backgroundColor: "purple",
    color: "white",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  headerText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  emptyContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
  },
  emptyText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "purple",
    marginVertical: 20,
  },
});
export default TodoList;
