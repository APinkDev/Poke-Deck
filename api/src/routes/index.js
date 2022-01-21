const express = require("express");
const { default: axios } = require("axios");
const routes = express.Router();
const { TypesInDB, PokemonsCreated } = require("../db.js");
const {
  pedirPorId,
  pedirTypes,
  pedirPorNombre,
  pokeRequest,
  createPoke,
} = require("../api.js");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

routes.route("/pokemons/:idPokemon").get(async (req, res) => {
  const { idPokemon } = req.params;
  console.log ("CSM", idPokemon)
  if (!Number.isNaN(Number(idPokemon))) {
    let pokemon = await pedirPorId(idPokemon);
    res.json(pokemon);
  } else {
    let db = await PokemonsCreated.findOne({
      where: { id: idPokemon },
      include: { model: TypesInDB },
    });
    res.json(db);
  }
});

// routes.route("/pokemons").get(async (req, res) => {
//   let { name } = req.query;
//   try {
//     if (name !== undefined) {
//       let pokesearch = await pedirPorNombre(name);
//       console.log (pokesearch)
//       let TypesInDB = await PokemonsCreated.findAll({
//         where: { name },
//         include: { model: TypesInDB },
//       });
//       let cont = TypesInDB.map((e) => ({
//         id: e.id,
//         name: e.name,
//         height: e.height,
//         weight: e.weight,
//         front_default: e.sprites.other["official-artwork"].front_default,
//         hp: e.stats[0].base_stat,
//         attack: e.stats[1].base_stat,
//         defense: e.stats[2].base_stat,
//         name: e.stats[3].base_stat,
//         special_defense: e.stats[4].base_stat,
//         speed: e.stats[5].base_stat,
//         types:
//           e.types.length === 0 ? "no types" : e.types.map((e) => e.type.name),
//       }));
//       let newcont = cont.pop();
//       pokesearch.push(newcont);
//       if (pokesearch.length === 0) {
//         res.status(400).json({ error: "bad request..." });
//       } else {
//         res.json(pokesearch);
//       }
//     }
//     else {
//       let pokemons = await pokeRequest();
//       // let db = await PokemonsCreated.findAll({ include: { model: TypesInDB } });
//       // let cont = db.map((e) => ({
//       //   id: e.ID,
//       //   name: e.name,
//       //   released: e.released,
//       //   rating: e.rating,
//       //   background_image: e.background_image,
//       //   platforms: e.platforms.split(","),
//       //   genres: e.TypesInDBs.map((elemento) => elemento.name),
//       //   description_raw: e.description_raw,
//       // }));
//       // pokemons.push(cont);
//       res.json(pokemons);
//     }
//   } catch (e) {
//     res.status(400).json({ error: "Poke not found" + e });
//   }
// });
routes.route("/pokemons").get(async (req, res) => {

    let { name } = req.query;
    if(name !== undefined) {
      let prueba = await pedirPorNombre(name);
      let DB = await PokemonsCreated.findAll({where:{name},include:{model:TypesInDB}});
      let cont = DB.map((e) => ({
        id: e.id,
        name: e.name,
        height: e.height,
        weight: e.weight,
        img: e.front_default,
        hp: e.hp,
        attack: e.attack_stat,
        defense: e.defense,
        special_attack: e.special_attack,
        special_defense: e.special_defense,
        speed: e.speed,
        types:e.TypesInDBs.map(elemento=>elemento.poketype),
      }));
      let finalcont = cont.pop();
      prueba.push(finalcont)

      if (prueba.length === 0) {
        res.status(400).json({ error: "bad request..." });
      } else {
        res.json(prueba);
      }
    }

    else{
      let prueba = await pokeRequest();
      let DB = await PokemonsCreated.findAll({ include: { model: TypesInDB } });
      let cont = DB.map((e) => ({
        id: e.id,
        name: e.name,
        height: e.height,
        weight: e.weight,
        img: e.front_default,
        hp: e.hp,
        attack: e.attack_stat,
        defense: e.defense,
        special_attack: e.special_attack,
        special_defense: e.special_defense,
        speed: e.speed,
        types:e.TypesInDBs.map(elemento=>elemento.poketype),
      }));
  
      prueba.push(cont)
      res.json(prueba)
    }
});


routes.get("/types", async (req, res) => {
  const typesApi = await axios.get("https://pokeapi.co/api/v2/type");
  const types = typesApi.data.results;

  types.forEach((el) => {
    TypesInDB.findOrCreate({
      where: { poketype: el.name },
    });
  });

  const allTypes = await TypesInDB.findAll();
  return res.send(allTypes);
}),
  // routes.route("/pokemons/types").get(async (req, res) => {
  //   try {
  //     const allTypes = await TypesInDB.findAll();
  //     if (allTypes.length === 0){
  //       const types = await pedirTypes()
  //       return res.send(types);
  //     }
  //   return res.send(allTypes);

  //   } catch (e) {
  //     res.status(400).json(e);
  //   }
  // });

  routes.post("/create", createPoke);

module.exports = routes;
