import { View, Text, SafeAreaView, StatusBar, Pressable } from "react-native";
import React from "react";
import { StyleSheet } from "react-native";
import TodoList from "../Components/TodoList";
import Dialog from "react-native-dialog";
import { useState } from "react";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import { useSelector, useDispatch } from "react-redux";
import { RootState, AppDispatch } from "../redux/store";
import { addTodo } from "../redux/todoSlice";
import { todoItemProps } from "../types/types";
const All = () => {
  const [openDialog, setOpenDialog] = useState(false);
  const [taskName, setTaskName] = useState("");
  const todos = useSelector((state: RootState) => state.todos);
  console.log(todos);
  const dispatch = useDispatch<AppDispatch>();

  const handleSubmit = () => {
    const newTask: todoItemProps = {
      id: Date.now(),
      taskName,
      completed: false,
    };
    dispatch(addTodo(newTask));
    setTaskName("");
    setOpenDialog(false);
  };

  return (
    <SafeAreaView style={styles.container}>
      <TodoList todos={todos} />
      <View>
        <Dialog.Container visible={openDialog}>
          <Dialog.Title>Add Todo</Dialog.Title>

          <Dialog.Input
            placeholder="walk the dog, buy groceries"
            onChange={(e) => setTaskName(e.nativeEvent.text)}
            autoFocus
          />

          <Dialog.Button label="Cancel" onPress={() => setOpenDialog(false)} />
          <Dialog.Button label="Add" onPress={handleSubmit} />
        </Dialog.Container>
      </View>

      <Pressable
        onPress={() => setOpenDialog(true)}
        style={{
          backgroundColor: "purple",
          borderRadius: 10,
          padding: 10,
          marginBottom: 10,
          position: "absolute",
          bottom: 20,
          right: 20,
          elevation: 6,
        }}
      >
        <MaterialCommunityIcons name="plus" size={24} color="white" />
      </Pressable>
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
