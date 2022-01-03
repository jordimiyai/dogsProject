const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('breed', {
    
    id: {
      type: DataTypes.UUID,
      primaryKey: true,
      defaultValue: DataTypes.UUIDV4,
      validate:{
        isUUID: 4,
      }
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isAlpha: { ignore: "/s" },
        notNull: { msg: "Cannot be null" },
        notEmpty: true,
        notBlank: true,
      },
    },
    height: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notNull: { msg: "Cannot be null" },
      },
    },
    weight: {
      type: DataTypes.JSON,
      allowNull: false,
      validate: {
        notNull: { msg: "Cannot be null" },
      },
    },
    life_span:{
      type: DataTypes.STRING,
      validate: {
        isAlphanumeric: { ignore: "/s" },
      },
    },
},
  {
    timestamps: false,
  }
);
};
