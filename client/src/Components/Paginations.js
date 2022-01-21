import React from "react";
// import "./Paginations.css"

const Paginations = ({ pokesPerPage, totalpokes, paginate }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalpokes / pokesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <p>Hola</p>
      <ul className="Pagination__ul">
        {pageNumbers.map(number => (
          <li  key={number} className="Pagination__Li">
            <button onClick={() => paginate(number)} className="Pagination__Button">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Paginations;
