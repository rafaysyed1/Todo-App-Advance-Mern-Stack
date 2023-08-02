import { createSlice } from "@reduxjs/toolkit";

export const TODOS_INITIAL_STATE = {
  todos: [],
};

export const todosSlice = createSlice({
  name: 'todos',
  initialState: TODOS_INITIAL_STATE,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push(action.payload);
    },
    deleteTodo: (state, action) => {
      state.todos = state.todos.filter(todo => todo.title !== action.payload);
    },
    
    updateTodo: (state, action) => {
      const index = state.todos.findIndex(todo => todo.title === action.payload.title);
      if (index !== -1) {
        state.todos[index] = action.payload;
      }
    },
    markAsComplete: (state, action) => {
      const index = state.todos.findIndex(todo => todo.title === action.payload.title);
      if (index !== -1) {
        state.todos[index].completed = true;
      }
    },
  },
});

export const { addTodo, deleteTodo, updateTodo, markAsComplete } = todosSlice.actions;
export const todoReducer = todosSlice.reducer;

