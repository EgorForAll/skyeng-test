import React from "react";
import { connect } from "react-redux";
import UserCard from "../user-card/user-card";

const UsersList = ({ users }) => {
  console.log(users);
  return (
    <ul className="users-list">
      {users && users.length > 0
        ? users.map((item) => <UserCard user={item} />)
        : null}
    </ul>
  );
};

const mapStateToProps = (state) => ({
  users: state.listOfUsers,
});

export { UsersList };

export default connect(mapStateToProps)(UsersList);
