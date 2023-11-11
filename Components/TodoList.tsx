import { ScrollView } from "react-native";
import React from "react";
import { todos } from "../data/dummydata";
import TodoItem from "./TodoItem";


const TodoList = () => {
  return (
    <ScrollView style={{ flex: 1, width: "100%", }}>
      {todos.map((todo) => {
        return <TodoItem key={todo.id} todo={todo} />;
      })}
    </ScrollView>
  );
};

export default TodoList;
