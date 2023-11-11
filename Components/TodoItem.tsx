import { View, Text, StyleSheet } from "react-native";
import React from "react";
import { Checkbox } from "react-native-paper";
import { useState } from "react";
const TodoItem = ({ todo }: { todo: todoItemProps }) => {
  const [checked, setChecked] = useState(todo.completed);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{todo.title}</Text>
      <View>
        <Checkbox.Item
          color="purple"
          label=""
          status={checked ? "checked" : "unchecked"}
          onPress={() => setChecked(!checked)}
        />
      </View>
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
    borderWidth: 1,
    marginHorizontal: 10,
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
  },
});

export default TodoItem;
