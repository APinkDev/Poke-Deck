import React from "react";
import { Link } from "react-router-dom";
import "./Pokemon.css";
export default function Pokemon({
  id,
  name,
  //front_default,
  img,
  types,
}) {
  return (
    <div>
      {/* <Link to={`/details/${id}`}> */}
      <Link to={`details/${id}`}>
        <div
          className="Pokemon__All"
          style={{ backgroundImage: `url('${img}')` }}
        >
          {/* <p>lol{img}</p> */}
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
                <span>No types yet</span>
              )}
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
}
