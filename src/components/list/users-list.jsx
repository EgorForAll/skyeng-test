import React, { useState } from "react";
import { connect } from "react-redux";
import UserCard from "../user-card/user-card";
import EmptyList from "../empty-list/empty-list";
import Pagination from "../pagination/pagination";

const UsersList = ({ users }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [usersPerPage] = useState(4);

  const lastUsersIndex = currentPage * usersPerPage;
  const firstUsersIndex = lastUsersIndex - usersPerPage;
  const currentUsers = users.slice(firstUsersIndex, lastUsersIndex);
  const togglePage = (pageNumber) => setCurrentPage(pageNumber);
  return (
    <>
      {users && users.length > 0 ? (
        <ul className="users-list">
          {currentUsers.map((item) => (
            <UserCard user={item} key={item.id} />
          ))}
        </ul>
      ) : (
        <EmptyList />
      )}
      <Pagination
        usersPerPage={usersPerPage}
        totalUsers={users.length}
        togglePage={togglePage}
      />
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.listOfUsers,
});

export { UsersList };

export default connect(mapStateToProps)(UsersList);
