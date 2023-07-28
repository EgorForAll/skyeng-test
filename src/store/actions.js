import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_LIST_OF_USERS: "load list of users",
};

export const loadUsers = createAction(
  ActionType.LOAD_LIST_OF_USERS,
  (users) => {
    return {
      payload: users,
    };
  }
);
