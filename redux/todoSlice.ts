import { createSlice } from "@reduxjs/toolkit";

interface todoItemProps {
  id: number;
  taskName: string;
  completed: boolean;
}

const initialState = {
  todos: [] as todoItemProps[],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
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
