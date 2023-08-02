import { combineReducers } from "@reduxjs/toolkit";
import { userReducer } from "./user/userReducer";
import { todoReducer } from "./todos/todosReducer";

export const rootReducer = combineReducers({
    todos : todoReducer,
    user:  userReducer
})