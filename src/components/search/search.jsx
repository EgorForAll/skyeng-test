import React, { useEffect, useRef } from "react";

const Search = () => {
  const SearchInputRef = useRef();
  const FormRef = useRef();
  useEffect(() => {
    FormRef.current.addEventListener("submit", (e) => {
      e.preventDefault();
      console.log(SearchInputRef.current.value);
    });
  });

  return (
    <form className="form" method="POST" action="" ref={FormRef}>
      <input
        ref={SearchInputRef}
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
