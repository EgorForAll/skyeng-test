import { createAction } from "@reduxjs/toolkit";

export const ActionType = {
  LOAD_LIST_OF_USERS: "load list of users",
  CHANGE_SORT_TYPE: "change sort type",
};

export const loadUsers = createAction(
  ActionType.LOAD_LIST_OF_USERS,
  (users) => {
    return {
      payload: users,
    };
  }
);

export const changeSortType = createAction(ActionType.CHANGE_SORT_TYPE);
