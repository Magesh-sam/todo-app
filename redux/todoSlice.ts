import { createSlice } from "@reduxjs/toolkit";
import { todoItemProps } from "../types/types";


const initialState = {
  todos: [] as todoItemProps[],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      console.log("received payload", action.payload);
      state.todos.push(action.payload);
      console.log("todos after push", state.todos);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        todo.completed = !todo.completed;
      }
    },
  },
});

export const { addTodo, deleteTodo, toggleTodoStatus } = todoSlice.actions;
export default todoSlice.reducer;
