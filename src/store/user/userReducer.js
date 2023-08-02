import { createSlice } from "@reduxjs/toolkit";
const INITIAL_STATE = {
    currentUser: null
  }

export const userSlice = createSlice({
  //These attributes to tell what our this reducer is suppose to do and this user is that name we would tend to write before every user action type
  name : 'user',
  initialState : INITIAL_STATE,
  reducers : {
    setCurrentUser(state,action){
      state.currentUser = action.payload;
    }
  }

})


export const {setCurrentUser}= userSlice.actions;

export const userReducer = userSlice.reducer;