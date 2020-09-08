"use strict";
module.exports = (sequelize, DataTypes) => {
  const Review = sequelize.define(
    "Review",
    {
      beerId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      rating: DataTypes.NUMERIC(2, 1),
      comments: DataTypes.STRING,
    },
    {}
  );
  Review.associate = function (models) {
    Review.belongsTo(models.User, {
      foreignKey: "userId",
    });
    Review.belongsTo(models.Beer, {
      foreignKey: "beerId",
    });
    Review.belongsTo(models.Brewery, {
      foreignKey: "breweryId",
    });
  };
  return Review;
};
