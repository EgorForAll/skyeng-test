import React, { useState } from "react";
import PropTypes from "prop-types";

const UserCard = ({ user }) => {
  const [isPopupOpend, setOpenPopup] = useState(false);
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
      <button className="card-btn" onClick={() => setOpenPopup(!isPopupOpend)}>
        {isPopupOpend ? "Скрыть тип пользователя" : "Узнать тип пользователя"}
      </button>
      {isPopupOpend ? <span className="popup">{user.type}</span> : null}
    </li>
  );
};

UserCard.propTypes = {
  user: PropTypes.shape({
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
  }),
};

export default UserCard;
