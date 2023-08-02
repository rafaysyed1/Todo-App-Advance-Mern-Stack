import { createSelector } from "reselect";

// Select todos reducer from state
const selectTodosReducer = (state) => state.todos;

// Selector to select all todos
export const selectTodos = createSelector(
    [selectTodosReducer],
    (todosSlice) => todosSlice
)
// Will Select the Todo with the clicked Title
export const selectTodoByTitle = (state, title) =>
  state.todos.todos.find((todo) => todo.title === title);
