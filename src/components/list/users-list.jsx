import React, { useState } from "react";
import { connect } from "react-redux";
import UserCard from "../user-card/user-card";

const OAUTH_TOKEN = "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";

const UsersList = ({ users }) => {
  const [sort, setSort] = useState("none");

  async function getNumber(user) {
    const response = await fetch(
      `https://api.github.com/users/${user.login}/repos`,
      {
        method: "GET",
        headers: {
          Authorization: `token ${OAUTH_TOKEN}`,
        },
      }
    ).then((res) => res.json());
    const number = response.length;
    return number;
  }

  const compareUp = (a, b) => {
    let firstRepo = getNumber(a);
    let secondRepo = getNumber(b);
    if (firstRepo < secondRepo) {
      return -1;
    }
    if (firstRepo > secondRepo) {
      return -1;
    }

    return 0;
  };

  const sortedUsers = users.slice().sort(compareUp);
  console.log(sortedUsers);

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
