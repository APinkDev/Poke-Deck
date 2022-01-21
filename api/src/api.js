const { default: axios } = require("axios");
const { PokemonsCreated } = require("./db.js");
const { TypesInDB } = require("./db.js");

module.exports = {
  pedirPorId: (id) => {
    let cont = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      .then((resultado) => (resultado = resultado.data))
      .then((resort) => {
        for (property in resort) {
          return {
            id: resort.id,
            name: resort.name,
            height: resort.height,
            weight: resort.weight,
            front_default:
              resort.sprites.other["official-artwork"].front_default,
            hp: resort.stats[0].base_stat,
            attack: resort.stats[1].base_stat,
            defense: resort.stats[2].base_stat,
            special_attack: resort.stats[3].base_stat,
            special_defense: resort.stats[4].base_stat,
            speed: resort.stats[5].base_stat,
            types:
              resort.types.length === 0
                ? "no types"
                : resort.types.map((e) => e.type.name),
          };
        }
        return property;
      });
    return cont;
  },

  pedirPorNombre: (name) => {
    let cont = axios
      .get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .then((resultado) => (resultado = resultado.data))
      .then((resort) => {
        for (property in resort) {
          return {
            id: resort.id,
            name: resort.name,
            height: resort.height,
            weight: resort.weight,
            front_default:
              resort.sprites.other["official-artwork"].front_default,
            hp: resort.stats[0].base_stat,
            attack: resort.stats[1].base_stat,
            defense: resort.stats[2].base_stat,
            special_attack: resort.stats[3].base_stat,
            special_defense: resort.stats[4].base_stat,
            speed: resort.stats[5].base_stat,
            types:
              resort.types.length === 0
                ? "no types"
                : resort.types.map((e) => e.type.name),
          };
        }
        return property;
      });
    return cont;
  },


  pokeRequest: async () => {
    const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=20");
    const results = apiUrl.data.results

    const pokemonInfo = []

    // const resultsPokes = apiUrl.data.results.map(async el => {
    //     const pokes = await axios.get(el.url);
    //     const pokeInfo = pokes.data

    //     return {
    //         id: pokeInfo.id,
    //         name: el.name,
    //         type: pokeInfo.types.map( t => t.type.name),
    //         img: pokeInfo.sprites.versions["generation-v"]["black-white"].animated
    //            .front_default,
    //         strengh: pokeInfo.stats[1].base_stat,
    //     }
    // })
    
    for(let i = 0 ; i < results.length ; i++){
      const pokes = await axios.get(results[i].url);
      const pokeInfo = pokes.data;

      pokemonInfo.push({
        id: pokeInfo.id,
        name: pokeInfo.name,
        types: pokeInfo.types.map((t) => t.type.name),
        img: pokeInfo.sprites.other['official-artwork'].front_default,
        attack: pokeInfo.stats[1].base_stat,
        weight: pokeInfo.weight,
        height: pokeInfo.height
      });
    }
    
    return pokemonInfo;
},




  // pokeRequest: async () => {
  //   const apiUrl = await axios.get(
  //     "https://pokeapi.co/api/v2/pokemon?limit=40"
  //   );
  //   const results = apiUrl.data.results;

  //   const pokemonInfo = [];

  //   for (let i = 0; i < results.length; i++) {
  //     const pokes = await axios.get(results[i].url);
  //     const pokeInfo = pokes.data;

  //     pokemonInfo.push({
  //       // id: pokeInfo.id,
  //       name: pokeInfo.name,
  //       types: pokeInfo.types.map((t) => t.type.name),
  //       img: pokeInfo.sprites.other["official-artwork"].front_default,
  //       // attack: pokeInfo.stats[1].base_stat,
  //       // weight: pokeInfo.weight,
  //       // height: pokeInfo.height
  //     });
  //   }

  //   return pokemonInfo;
  // },






  
//     async pokeRequest2(req, res) {
//   try {
//     //pido a la url los pokemons
//     let datos = [];
//     const pokemons = await axios.get(`https://pokeapi.co/api/v2/pokemon?limit=40`)
//       .then((res) => res.data)
//       .then((res) => res);
//     //mapeo y hago peticion a la url que me dio la anterior peticion para obtener mas datos aparte del nombre
//     const promise = pokemons.results.map(async (pokemon) => {
//       return await axios.get(`${pokemon.url}`).then((res) => res.data);
//     });

//     const resultado = await Promise.all(promise);
//     resultado.map((pokemon) =>
//       datos.push({
//         id: pokemon.id,
//         name: pokemon.name,
//         life: pokemon.stats[0].base_stat,
//         force: pokemon.stats[1].base_stat,
//         defending: pokemon.stats[2].base_stat,
//         speed: pokemon.stats[5].base_stat,
//         types: pokemon.types.map((info) => {
//           return { name: info.type.name };
//         }),
//         img: pokemon.sprites.versions["generation-v"]["black-white"].animated
//           .front_default,
//       })
//     );
//     return datos;
//   } catch(e){
//     console.log("error" + e);
//   }
// },

  pedirTypes: async () => {
    const typesdb = await axios.get(`https://pokeapi.co/api/v2/type`);
    const types = typesdb.data.results;
    types.forEach((el) => {
      TypesInDB.findOrCreate({
        where: { poketype: el.name },
      });
    });
    return types;
  },

  async createPoke(req, res) {
    const {
      name,
      height,
      weight,
      front_default,
      hp,
      attack,
      defense,
      special_attack,
      special_defense,
      speed,
      poketype,
    } = req.body;

    try {
      const [key, value] = await PokemonsCreated.findOrCreate({
        where: { name },
        defaults: {
          height,
          weight,
          front_default,
          hp,
          attack,
          defense,
          special_attack,
          special_defense,
          speed,
        },
      });

      const typos = await TypesInDB.findAll({
        where: { poketype },
      });
      await key.addTypesInDBs(typos);
      res.json(key);
    } catch (e) {
      console.log("Error" + e);
    }
  },
}

// pokeRequest: async () => {
//   let contNum = [];
//   for (let i = 0; i < 4; i++) {
//     contNum.push(Math.floor(Math.random() * 201));
//   }
//   let cont = await Promise.all(
//     contNum.map((e) =>
//       axios
//         .get(
//           // `https://api.rawg.io/api/games?page_size=30&page=${e}&key=ff2f1ede9a8e478ea044e252b0fc9334`
//           `https://pokeapi.co/api/v2/pokemon?page_size=20&page=${e}`
//         )
// .then((resultado) => (resultado = resultado.data))
// .then((resultado) => (resultado = resultado.results))
// .then((resort) => {
//           let cajita = [];
//           resort.forEach((elm) =>{
//             cajita.push({
//               name: elm.name,
//             });

//             return cajita
//           });
//           return cont;
//         }
//         },

// pokeRequest: async () => {
//   let contNum = [];
//   for (let i = 0; i < 4; i++) {
//     let random = Math.floor(Math.random() * 50);
//     contNum.push(random * 20);
//   }
//   console.log("SOT EL TANDOMICZER", contNum);
//   let cont = await Promise.all(
//     contNum.map((e) =>
//       axios
//         .get(`https://pokeapi.co/api/v2/pokemon?offset=${e}&limit=20`)
//         .then((r) => r.data.results)
//         .then((res) => {
//           res.forEach((results) => {
//             axios
//               .get(`${results.url}`)
//               .then((resultado) => (resultado = resultado.data))
//               .then((resort) => {
//                 for (property in resort) {

//                   console.log ("zzzzzzzzzz" ,property);
//                   return {
//                     // id: resort.id,
//                     name: property.name,
//                     // height: property.height,
//                     // weight: resort.weight,
//                     // front_default:
//                     //   resort.sprites.other["official-artwork"].front_default,
//                     // hp: resort.stats[0].base_stat,
//                     // attack: resort.stats[1].base_stat,
//                     // defense: resort.stats[2].base_stat,
//                     // name: resort.stats[3].base_stat,
//                     // special_defense: resort.stats[4].base_stat,
//                     // speed: resort.stats[5].base_stat,
//                     // types:
//                     //   resort.types.length === 0
//                     //     ? "no types"
//                     //     : resort.types.map((e) => e.type.name),
//                   };
//                 }
//                 console.log ("holaaaaaaa" ,property);
//                 return property;
//               });
//           });

//           // let cajita = [];
//           // res.forEach((result) =>
//           //   cajita.push({

//           //     url: result.url,

//           //   })
//           // );
//           // return cajita;
//         })
//     )
//   );
//   return cont;
// },

const getApiInfo = async () => {
  const apiUrl = await axios.get("https://pokeapi.co/api/v2/pokemon?limit=10");
  const results = apiUrl.data.results

  const pokemonInfo = []

  // const resultsPokes = apiUrl.data.results.map(async el => {
  //     const pokes = await axios.get(el.url);
  //     const pokeInfo = pokes.data

  //     return {
  //         id: pokeInfo.id,
  //         name: el.name,
  //         type: pokeInfo.types.map( t => t.type.name),
  //         img: pokeInfo.sprites.versions["generation-v"]["black-white"].animated
  //            .front_default,
  //         strengh: pokeInfo.stats[1].base_stat,
  //     }
  // })
  
  for(let i = 0 ; i < results.length ; i++){
    const pokes = await axios.get(results[i].url);
    const pokeInfo = pokes.data;

    pokemonInfo.push({
      id: pokeInfo.id,
      name: pokeInfo.name,
      types: pokeInfo.types.map((t) => t.type.name),
      img: pokeInfo.sprites.other['official-artwork'].front_default,
      attack: pokeInfo.stats[1].base_stat,
      weight: pokeInfo.weight,
      height: pokeInfo.height
    });
  }
  
  return pokemonInfo;
}