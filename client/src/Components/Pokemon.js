import React from "react";
import { Link } from "react-router-dom";
import "./Pokemon.css";

export default function Pokemon({
  id,
  name,
  front_default,
  types,
  
}) {
  return (
    <div>
      <Link to={`/home/details/${id}`}>
        <div
          className="Pokemon__All"
          style={{ backgroundImage: `url('${front_default}')` }}
        >
          <div className="Pokemon__Container__Imagen">
            <div className="Pokemon__Name">{name}</div>
            <div className="Pokemon__types">
              {Array.isArray(types) ? (
                types.map((a) => (
                  <li key={a}>
                    <span>{a} </span>
                  </li>
                ))
              ) : (
                <span>No genres yet</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
