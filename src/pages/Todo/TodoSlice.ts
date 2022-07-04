import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { TodoData } from "../../common/types";
import data from "./data.json";

const initialState = {
  todos: data as TodoData[],
};

const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo(state, action: PayloadAction<string>) {
      state.todos.push({
        id: state.todos.length + 1,
        task: action.payload,
        complete: false,
      });
    },
    filterTodo(state) {
      state.todos = state.todos.filter((todo) => {
        return !todo.complete;
      });
    },
    toggleTodo(state, action: PayloadAction<TodoData>) {
      state.todos = [...state.todos].map((todo) => {
        return todo.id === action.payload.id
          ? { ...todo, complete: !todo.complete }
          : { ...todo };
      });
    },
  },
});

export const { addTodo, filterTodo, toggleTodo } = todoSlice.actions;
export default todoSlice.reducer;
