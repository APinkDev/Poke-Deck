import axios from "axios";

// export const GetTypes = () => {
//   return function (dispatch) {
//     fetch(`/types`)
//       .then((result) => result.json())
//       .then((r) => {
//         dispatch({ type: "GETTYPES", payload: r });
//       });
//   };
// };

export const GetTypes = () => {
  return async (dispatch) => {
    const response = await axios.get(`/types`)
    if (response?.data) {
      dispatch ({
        type: "GETTYPES", payload: {pokemones: response.data}
      })
    }
  }
}




// export const PokemonAll = () => {
//   return function (dispatch) {
//     fetch(`/pokemons`)
//       .then((result) => result.json())
//       .then((r) => {
//         return dispatch({
//           type: "POKEMONALL",
//           payload: Array.isArray(r) && r.flat(),
//         });
//       });
//   };
// };

export const PokemonAll = () => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons`)
    if (response?.data) {
      dispatch ({
        type: "POKEMONALL", payload: {pokemones: Array.isArray(response.data && response.data.flat())}
      })
    }
  }
}

// export const PokemonName = (id) => {
//   return function (dispatch) {
//     fetch(`/pokemons?name=${id}`)
//       .then((result) => result.json())
//       .then((r) => {
//         dispatch({ type: "POKEMONNAME", payload: r });
//       });
//   };
// };

export const PokemonName = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons?name=${id}`)
    if (response?.data) {
      dispatch ({
        type: "POKEMONNAME", payload: {pokemones: response.data}
      })
    }
  }
}

export const Detailed = (id) => {
  return async (dispatch) => {
    const response = await axios.get(`/pokemons/${id}`);
    if (response?.data) {
      dispatch({ type: "DETAILED", payload: { detis: response.data } });
    }
  };
};


// export const Post = (inputs) => {
//   return function (dispatch) {
//     fetch("/create", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(inputs),
//     }).then((resu) => console.log(resu));
//   };
// };

export const Post = function (inputs) {
  return function (dispatch) {
    return axios.post("/create", inputs).then((response) => {
      console.log(response);
    });
    //     dispatch({
    //         type: 'POST',
    //         payload: response.data
    //     })
    // })
  };
};

export const Filtrated = (arg) => {
  return {
    type: "FILTRATED",
    payload: arg,
  };
};
