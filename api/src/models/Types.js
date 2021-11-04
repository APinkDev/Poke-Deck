const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  sequelize.define("TypesInDB",
    {
      // ID: {
      //   type: DataTypes.INTEGER,
      //   primaryKey:true
      // },  
      poketype: {
        type: DataTypes.STRING,
        allowNull:false
      }
    }
  )
};
