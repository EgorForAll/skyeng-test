import React, { useEffect, useRef } from "react";
import { useDispatch } from "react-redux";
import { fetchUsersList } from "../../store/api-actions";

const Search = () => {
  const SearchInputRef = useRef();
  const FormRef = useRef();
  const dispatch = useDispatch();
  useEffect(() => {
    FormRef.current.addEventListener("submit", (e) => {
      e.preventDefault();
      dispatch(fetchUsersList(SearchInputRef.current.value));
    });
  });

  return (
    <form className="form" method="GET" action="" ref={FormRef}>
      <div className="search-bar">
        <input
          ref={SearchInputRef}
          className="search-input"
          type="text"
          placeholder="введите логин пользователя"
        />
        <button type="submit" className="submit-btn">
          Поиск
        </button>
      </div>
      <div className="checkbox-wrapper">
        <span>Количество репозиториев:</span>
        <input type="radio" id="up" name="radio" />
        <label htmlFor="up">по возрастанию</label>
        <input type="radio" id="down" name="radio" />
        <label htmlFor="down">по убыванию</label>
      </div>
    </form>
  );
};

export default Search;
