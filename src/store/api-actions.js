import { loadUsers } from "./actions";

export const fetchUsersListAsc = (login) => (dispatch, _getState, api) =>
  api
    .get(`users?q=${login}&sort=repositories&order=asc`)
    .then(({ data }) => dispatch(loadUsers(data.items)))
    .catch((err) => console.log(err));

export const fetchUsersListDesc = (login) => (dispatch, _getState, api) =>
  api
    .get(`users?q=${login}&sort=repositories&order=desc`)
    .then(({ data }) => dispatch(loadUsers(data.items)))
    .catch((err) => console.log(err));
