import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Detailed } from "../Store/actions";
import { useDispatch, useSelector } from "react-redux";

const Details = (props) => {
  let id = props.match.params.id;

  const dispatch = useDispatch();

  const detailed = useSelector((state) => state.Details);
  console.log('detailed' + JSON.stringify(detailed))
  console.log('soyId' + id);
  
  useEffect(() => {
    dispatch(Detailed(id));
  }, [id, dispatch]);



  return (
    <div className="Background__Details">
      <div className="Back__Buttom">
        <Link to="/home">
          <button className="HomeButtom">←</button>
        </Link>
      </div>
      <p>Howdy, Loading Pokemons</p>
      <div className="Released__Details">{detailed.id}</div>
      <div className="Name__Details">{detailed.name}</div>

      <div className="Rating">Vida:💖{detailed.hp}</div>
      <div className="Rating">Fuierza:💖{detailed.attack}</div>
      <div className="Rating">Defensa:💖{detailed.defense}</div>
      <div className="Rating">velocida:💖{detailed.rating}</div>
      <div className="Rating">special ataque:💖{detailed.special_attack}</div>
      <div className="Rating">special defensa:💖{detailed.special_defense}</div>
      <div className="Rating">altura:💖{detailed.height}</div>
      <div className="Rating">peso:💖{detailed.weight}</div>

      <div className="GameImg">
        <img
          className="GameImg__img"
          src={detailed.front_default}
          alt="background"
        ></img>
      </div>
      <div className="Genre__Container__Details">
        <div className="Genre__Details">
          {Array.isArray(detailed.types) ? (
            detailed.types.map((a) => (
              <li key={a}>
                <span>{a} </span>
              </li>
            ))
          ) : (
            <span>No genres yet</span>
          )}
        </div>
      </div>
      <div>
      </div>

      {/* <div className="Platform__Container__Detailed">
        <div className="Platfom__Detailed">
          {
            Array.isArray(platArray) && platArray.length ? (
            platArray.map((a) => (
              <li key={a}>
                <span>{a} </span>
              </li>
            ))
            ): (
            detailed.platforms&&detailed.platforms.map((a)=>(
              <li key={a}>
                <span>{a}</span>
                </li>
            ))
          )}

        </div>
      </div> */}

      <div>
      </div>
    </div>
  );
};

export default Details;