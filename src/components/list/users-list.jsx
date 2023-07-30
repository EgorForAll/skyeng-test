import React, { useState } from "react";
import { connect } from "react-redux";
import UserCard from "../user-card/user-card";
import EmptyList from "../empty-list/empty-list";
import Pagination from "../pagination/pagination";
import PropTypes from "prop-types";

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

UsersList.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      login: PropTypes.string,
      id: PropTypes.number,
      node_id: PropTypes.string,
      avatar_url: PropTypes.string,
      gravatar_id: PropTypes.string,
      url: PropTypes.string,
      html_url: PropTypes.string,
      followers_url: PropTypes.string,
      following_url: PropTypes.string,
      gists_url: PropTypes.string,
      starred_url: PropTypes.string,
      subscriptions_url: PropTypes.string,
      organizations_url: PropTypes.string,
      repos_url: PropTypes.string,
      events_url: PropTypes.string,
      received_events_url: PropTypes.string,
      type: PropTypes.string,
      site_admin: PropTypes.bool,
      score: PropTypes.number,
    })
  ),
};

export { UsersList };

export default connect(mapStateToProps)(UsersList);
