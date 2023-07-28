import { loadUsers } from "./actions";

export const fetchUsersList = (login) => (dispatch, _getState, api) =>
  api
    .get(`/users?q=${login}`)
    .then(({ data }) => dispatch(loadUsers(data)))
    .catch((err) => console.log(err));
