import { createReducer } from "@reduxjs/toolkit";
import { loadUsers } from "./actions";

const initialState = {
  listOfUsers: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadUsers, (state, action) => {
    state.listOfUsers = action.payload;
  });
});
