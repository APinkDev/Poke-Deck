import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { PokemonAll } from "../Store/actions";
import Pokemons from "./Pokemons";
import Paginations from "./Paginations";

export default function Home() {
  const pokemon = useSelector((state) => state.PokemonState);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(PokemonAll());
  }, [dispatch]);

  let container = pokemon;

  const [loading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [pokesPerPage] = useState(10);

  const indexOfLastPost = currentPage * pokesPerPage;
  const indexOfFirstPost = indexOfLastPost - pokesPerPage;
  const currentPost = container.slice(indexOfFirstPost, indexOfLastPost);
  console.log("current" + currentPost);
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <body className="Home">
      <div className="Home__Banner">
        <div>
          <div className="Home__Container__MinorFilters"></div>
        </div>
      </div>
      <div className="Home__AllContainer">
        <div className="Home__LeftContainer">
          <Paginations
            pokesPerPage={pokesPerPage}
            totalpokes={container.length}
            paginate={paginate}
          />
        </div>

        <div className="Home__ZoneContainer">
          <div className="Home__GamesZone">
            <Pokemons pokemons={currentPost} loading={loading} />
          </div>
        </div>
      </div>
    </body>
  );
}
