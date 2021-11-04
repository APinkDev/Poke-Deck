import React from "react";
import Pokemon from "./Pokemon";
export default function Pokemons({ Pokemons, loading }) {
  if (loading) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="Pokemons">
      {Pokemons &&
        Pokemons.map((e) => (
          <Pokemon
            key={e.id}
            id={e.id}
            height={e.height}
            weight={e.weight}
            front_default={e.front_default}
            hp={e.hp}
            attack={e.attack}
            defense={e.defense}
            special_attack={e.special_attack}
            special_defense={e.special_defense}
            speed={e.speed}
            types={e.types}
          />
        ))}
    </div>
  );
}