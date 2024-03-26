import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    addTodo: (state, action) => {
      // also add completed: false
      action.payload.completed = false;
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      console.log(action.payload.name);
      state.todos = state.todos.filter(
        (todo) => todo.name != action.payload.name,
      );
    },
    updateTodoFun: (state, action) => {
      console.log("update function " + action.payload.name);
      state.todos = state.todos.map((todo) =>
        todo.name === action.payload.prename
          ? { ...todo, name: action.payload.name }
          : todo,
      );
    },
    updateStatus: (state, action) => {
      state.todos = state.todos.map((todo) =>
        todo.name === action.payload.name
          ? { ...todo, completed: !todo.completed }
          : todo,
      );
    },
  },
});

export const { addTodo, deleteTodo, updateTodoFun, updateStatus } =
  todoSlice.actions;
export default todoSlice.reducer;
