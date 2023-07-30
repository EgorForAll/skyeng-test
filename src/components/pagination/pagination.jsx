import React from "react";
import PropTypes from "prop-types";

const Pagination = ({ usersPerPage, totalUsers, togglePage }) => {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalUsers / usersPerPage); i++) {
    pageNumbers.push(i);
  }
  return (
    <div>
      <ul className="pagination">
        {pageNumbers.map((number) => (
          <li className="page-item" key={number}>
            <button className="page-button" onClick={() => togglePage(number)}>
              {number}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

Pagination.propTypes = {
  usersPerPage: PropTypes.number,
  totalUsers: PropTypes.number,
  togglePage: PropTypes.func,
};

export default Pagination;
