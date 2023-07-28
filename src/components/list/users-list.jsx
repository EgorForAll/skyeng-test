import React, { useState } from "react";
import { connect } from "react-redux";
import UserCard from "../user-card/user-card";

const compareUp = (a, b) => a - b;

const UsersList = ({ users }) => {
  const [sort, setSort] = useState("none");

  return (
    <>
      <div className="sorting">
        <span>Сортировать по количеству репозиториев:</span>
        <select className="sorting-bar" defaultValue={"none"}>
          <option value={"none"} onClick={() => setSort("none")}>
            -
          </option>
          <option value={"up"} onClick={() => setSort("up")}>
            По возрастранию
          </option>
          <option value={"down"} onClick={() => setSort("down")}>
            По убыванию
          </option>
        </select>
      </div>
      <ul className="users-list">
        {users && users.length > 0
          ? users.map((item) => <UserCard user={item} key={item.id} />)
          : null}
      </ul>
    </>
  );
};

const mapStateToProps = (state) => ({
  users: state.listOfUsers,
});

export { UsersList };

export default connect(mapStateToProps)(UsersList);
