export const GetTypes = () => {
  return function (dispatch) {
    fetch(`http://localhost:3001/types`)
      .then((result) => result.json())
      .then((r) => {
        dispatch({ type: "GETTYPES", payload: r });
      });
  };
};

export const PokemonAll = () => {
  return function (dispatch) {
    fetch(`http://localhost:3001/pokemons`)
      .then((result) => result.json())
      .then((r) => {
        return dispatch({
          type: "POKEMONALL",
          payload: Array.isArray(r) && r.flat(),
        });
      });
  };
};

export const PokemonName = (arg) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/pokemons?name=${arg}`)
      .then((result) => result.json())
      .then((r) => {
        dispatch({ type: "POKEMONNAME", payload: r });
      });
  };
};

export const Detailed = (id) => {
  return function (dispatch) {
    fetch(`http://localhost:3001/pokemons/${id}`)
      .then((result) => result.json())
      .then((r) => {
        dispatch({ type: "DETAILED", payload: r });
      });
  };
};

export const Post=(inputs)=>{
    return function (dispatch){
      fetch("http://localhost:3001/create",{method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputs),
    }).then(resu=>console.log(resu))
    }
  }