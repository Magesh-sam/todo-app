import { ScrollView } from "react-native";
import React from "react";
import { todos } from "../data/dummydata";
import TodoItem from "./TodoItem";
import { FlatList } from "react-native";

const TodoList = () => {
  return (
    <FlatList
      style={{ flex: 1, width: "100%", marginBottom: 40 }}
      data={todos}
      renderItem={({ item }) => <TodoItem todo={item} />}
      keyExtractor={(todo) => todo.id.toString()}
    />
    // <ScrollView style={{ flex: 1, width: "100%", marginBottom: 40 }}>
    //   {todos.map((todo) => {
    //     return <TodoItem key={todo.id} todo={todo} />;
    //   })}
    // </ScrollView>
  );
};

export default TodoList;
