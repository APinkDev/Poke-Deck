const initialState = {
  PokemonState: [],
  ApiTypes: [],
  Details: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMONALL": {
      state = initialState;
      return {
        ...state,
        PokemonState: state.PokemonState.concat(action.payload),
      };
    }

    case "POKEMONNAME": {
      state = initialState;
      return {
        ...state,
        PokemonState: state.PokemonState.concat(action.payload),
      };
    }

    case "GETTYPES": {
      state.ApiTypes = state.ApiTypes.slice(0, state.ApiTypes.length - 1);
      return {
        ...state,
        ApiTypes: state.ApiTypes.concat(action.payload),
      };
    }

    case "DETAILED": {
      state = initialState;
      return {
        ...state,
        Details: action.payload,
      };
    }

    // case "FILTRATED": {
    //   let flag = false;
    //   // console.log("filtrated in reducer: " + action.payload);
    //   return {
    //     ...state,
    //     Filtred: state.Videogame.filter(
    //       (element) => {
    //         for (let i = 0; i < action.payload.length; i++) {
    //           if (element.genres.includes(action.payload[i])) {
    //             flag = true;
    //           } else {
    //             flag = false;
    //             break;
    //           }
    //         }
    //         return flag;
    //       } //array.includes() retorna true si algun elemento suyo contiene el parametro del elemento
    //     ),
    //   };
    // }

    default: {
      return state;
    }
  }
};

export default reducer;
