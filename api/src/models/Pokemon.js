const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define("PokemonsCreated", {
    name: {
      type: DataTypes.STRING,
    },
    speed: {
      type: DataTypes.INTEGER,
    },
    defense: {
      type: DataTypes.INTEGER,
    },
    attack: {
      type: DataTypes.INTEGER,
    },
    hp: {
      type: DataTypes.INTEGER,
    },
    height: {
      type: DataTypes.INTEGER,
    },
    weight: {
      type: DataTypes.INTEGER,
    },
    special_attack: {
      type: DataTypes.INTEGER,
    },
    special_defense: {
      type: DataTypes.INTEGER,
    },
    front_default: {
      type: DataTypes.STRING,
    },
  });
};
