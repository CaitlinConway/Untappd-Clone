"use strict";
module.exports = (sequelize, DataTypes) => {
  const Beer = sequelize.define(
    "Beer",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Beer.associate = function (models) {
    Beer.hasMany(models.Review, {
      foreignKey: "beerId",
    });
  };
  return Beer;
};
