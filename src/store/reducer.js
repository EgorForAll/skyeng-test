import { createReducer } from "@reduxjs/toolkit";
import { loadUsers, addReposNumber } from "./actions";

const initialState = {
  listOfUsers: [],
  numberOfRepos: [],
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadUsers, (state, action) => {
    state.listOfUsers = action.payload;
  });
});
