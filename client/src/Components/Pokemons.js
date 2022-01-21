import React from "react";
import Pokemon from "./Pokemon";
export default function Pokemons({ pokemons, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }
 console.log ("poke",pokemons)
  return (
    <div className="Pokemons">
      {pokemons &&
        pokemons.map((e, index) => (
          <Pokemon
            key={index}
            id={e.id}
            // height={e.height}
            name={e.name}
            // weight={e.weight}
            img={e.img || e.front_default}
            //front_default={e.front_default}
            // hp={e.hp}
            // attack={e.attack}
            // defense={e.defense}
            // special_attack={e.special_attack}
            // special_defense={e.special_defense}
            // speed={e.speed}
            types={e.types || e.poketype}
          />
        ))}
    </div>
  );
}