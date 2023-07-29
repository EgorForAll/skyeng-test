import { createReducer } from "@reduxjs/toolkit";
import { loadUsers, changeSortType } from "./actions";

const initialState = {
  listOfUsers: [],
  isSortTypeAsc: true,
};

export const reducer = createReducer(initialState, (builder) => {
  builder.addCase(loadUsers, (state, action) => {
    state.listOfUsers = action.payload;
  });
  builder.addCase(changeSortType, (state) => {
    state.listOfUsers = !state.isSortTypeAsc;
  });
});
