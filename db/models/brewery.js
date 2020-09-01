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
    Brewery.hasMany(models.Beer, {
      foreignKey: "breweryId",
    });
  };
  return Brewery;
};
