import React from "react";

const UserCard = ({ user }) => {
  return (
    <li className="user-card">
      <h2 className="user-name">{user.login}</h2>
      <img
        src={user.avatar_url}
        alt="аватар пользователя"
        width="200"
        height="200"
      />
      <span className="user-id">id: {user.id}</span>
      <div className="profile-wrapper">
        <span>
          Профиль:{" "}
          <a href={user.html_url} className="card-link">
            {user.html_url}
          </a>
        </span>
      </div>
    </li>
  );
};

export default UserCard;
