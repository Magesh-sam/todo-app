import { View, Text, StyleSheet, Pressable } from "react-native";
import React, { memo } from "react";
import { Checkbox } from "react-native-paper";
import { todoItemProps } from "../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../redux/store";
import { deleteTodo, toggleTodoStatus } from "../redux/todoSlice";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
const TodoItem = ({ todo }: { todo: todoItemProps }) => {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <Checkbox.Item
          color="purple"
          label=""
          status={todo.completed ? "checked" : "unchecked"}
          onPress={() => dispatch(toggleTodoStatus(todo.id))}
        />
        <Text
          style={
            (styles.text,
            { textDecorationLine: todo.completed ? "line-through" : "none" })
          }
        >
          {todo.taskName}
        </Text>
      </View>
      <Pressable
        onPress={() => {
          dispatch(deleteTodo(todo.id));
        }}
      >
        <MaterialCommunityIcons
          name="delete-forever-outline"
          size={30}
          color="red"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: 15,
    borderColor: "purple",
    borderWidth: 2,
    marginHorizontal: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
    elevation: 5,
    backgroundColor: "white",
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    textDecorationColor: "purple",
  },
});

export default memo(TodoItem);
