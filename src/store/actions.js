import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_LIST_OF_USERS: "load list of users",
  ADD_NUMBER_OF_REPOS: "add repos number",
};

export const loadUsers = createAction(
  ActionType.LOAD_LIST_OF_USERS,
  (users) => {
    return {
      payload: users,
    };
  }
);

export const addReposNumber = createAction(
  ActionType.ADD_NUMBER_OF_REPOS,
  (number) => {
    return {
      payload: number,
    };
  }
);
