"use strict";
module.exports = (sequelize, DataTypes) => {
  const Brewery = sequelize.define(
    "Brewery",
    {
      name: DataTypes.STRING,
    },
    {}
  );
  Brewery.associate = function (models) {
    Brewery.hasMany(models.Review, {
      foreignKey: "breweryId",
    });
  };
  return Brewery;
};
