import React from "react";
import { connect } from "react-redux";
import UserCard from "../user-card/user-card";
import EmptyList from "../empty-list/emtry-list";

const UsersList = ({ users }) => {
  return (
    <>
      {users && users.length > 0 ? (
        <ul className="users-list">
          {users.map((item) => (
            <UserCard user={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.listOfUsers,
});

export { UsersList };

export default connect(mapStateToProps)(UsersList);
