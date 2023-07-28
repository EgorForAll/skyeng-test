import React from "react";

const Search = () => {
  return (
    <form className="form">
      <input
        type="text"
        id="search-bar"
        placeholder="введите логин пользователя"
      />
      <button type="submit" className="submit-btn">
        Поиск
      </button>
    </form>
  );
};

export default Search;
