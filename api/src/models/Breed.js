const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define(
    "breed",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        allowNull: false,
        defaultValue: DataTypes.UUIDV4,
        validate: {
          isUUID: 4,
          notNull: { msg: "Cannot be null" },
        },
      },

      name: {
        type: DataTypes.STRING,
        allowNull: false,
        validate: {
          isAlpha: { ignore: "/s" },
          notNull: { msg: "Cannot be null" },
          notEmpty: true,
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
      life_span: {
        type: DataTypes.STRING,
        validate: {
          is: /^([a-zA-Z0-9 ]+)$/
        },
      },
      img: {
        type: DataTypes.STRING,
        defaultValue:'https://1.bp.blogspot.com/-eUfb8uJN4Qo/UoBpycDJqAI/AAAAAAAAFx4/QTXhJTL_cI8/s1600/perro-mestizo.jpg',
        validate:{
          isUrl: true,
        }
      },
    },
    {
      timestamps: false,
    }
  );
};
