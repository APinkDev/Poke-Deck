const initialState = {
  PokemonState: [],
  ApiTypes: [],
  Details: [],
  Filtred: [],
  FiltredAZ: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "POKEMONALL": {
      state = initialState;
      return {
        ...state,
        PokemonState: state.PokemonState.concat(action.payload.pokemones),
      };
    }

    case "POKEMONNAME": {
      state = initialState;
      return {
        ...state,
        PokemonState: state.PokemonState.concat(action.payload.pokemones),
      };
    }

    case "GETTYPES": {
      state.ApiTypes = state.ApiTypes.slice(0, state.ApiTypes.length - 1);
      return {
        ...state,
        ApiTypes: state.ApiTypes.concat(action.payload.pokemones),
      };
    }

    case "DETAILED": {
      state = initialState;
      return {
        ...state,
        Details: action.payload.detis,
      };
    }

    //-----------------------------------------------------------------------------------------------

    case "FILTRATED": {
      let flag = false;
      // console.log("filtrated in reducer: " + action.payload);
      return {
        ...state,
        Filtred: state.PokemonState.filter(
          (element) => {
            for (let i = 0; i < action.payload.length; i++) {
              if (element.genres.includes(action.payload[i])) {
                flag = true;
              } else {
                flag = false;
                break;
              }
            } 
            return flag;
          } //array.includes() retorna true si algun elemento suyo contiene el parametro del elemento
        ),
      };
    }

    case "FILTRATEDAZ":
      {
        if (action.payload === "") {
          return {
            ...state,
            FiltredAZ: state.PokemonState,
          };
        }

        if (action.payload === "AZ" && state.Filtred.length === 0) {
          return {
            ...state,
            FiltredAZ: [...state.PokemonState].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        }
        if (action.payload === "AZ" && state.Filtred.length !== 0) {
          return {
            ...state,
            FiltredAZ: [...state.Filtred].sort((a, b) =>
              a.name.localeCompare(b.name)
            ),
          };
        }

        if (action.payload === "ZA" && state.Filtred.length === 0) {
          return {
            ...state,
            FiltredAZ: [...state.PokemonState].sort((b, a) =>
              a.name.localeCompare(b.name)
            ),
          };
        }
        if (action.payload === "ZA" && state.Filtred.length !== 0) {
          return {
            ...state,
            FiltredAZ: [...state.Filtred].sort((b, a) =>
              a.name.localeCompare(b.name)
            ),
          };
        }

        if (action.payload === "RatingASC" && state.Filtred.length === 0) {
          // console.log(state.PokemonState);
          return {
            ...state,
            FiltredAZ: [...state.PokemonState].sort((a, b) =>
              a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
            ),
          };
        }
        if (action.payload === "RatingASC" && state.Filtred.length !== 0) {
          return {
            ...state,
            FiltredAZ: [...state.Filtred].sort((a, b) =>
              a.rating > b.rating ? 1 : b.rating > a.rating ? -1 : 0
            ),
          };
        }

        if (action.payload === "RatingDES" && state.Filtred.length === 0) {
          // console.log(state.PokemonState);
          return {
            ...state,
            FiltredAZ: [...state.PokemonState].sort((a, b) =>
              a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
            ),
          };
        }
        if (action.payload === "RatingDES" && state.Filtred.length !== 0) {
          return {
            ...state,
            FiltredAZ: [...state.Filtred].sort((a, b) =>
              a.rating < b.rating ? 1 : b.rating < a.rating ? -1 : 0
            ),
          };
        }
      }
      break;

      case "FILTRATEDTYPE": {
        if (action.payload === "ALL") {
          return {
            ...state,
            Filtred: state.PokemonState,
          };
        }
        if (action.payload === "API" && state.Filtred.length === 0) {
          return {
            ...state,
            Filtred: state.PokemonState.filter((a) => 
            !Number.isNaN(Number(a.id))),
          };
        }
        if (action.payload === "DB" && state.Filtred.length === 0) {
          return {
            ...state,
            Filtred: state.PokemonState.filter((a) => 
            Number.isNaN(Number(a.id))),
          }; 
        }
      }


    default: {
      return state;
    }
  }
};

export default reducer;
