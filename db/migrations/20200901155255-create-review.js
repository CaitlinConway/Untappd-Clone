"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable("Reviews", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      beerId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Beers" },
      },
      breweryId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Breweries" },
      },
      userId: {
        type: Sequelize.INTEGER,
        allowNull: false,
        references: { model: "Users" },
      },
      rating: {
        type: Sequelize.NUMERIC(2, 1),
        allowNull: false,
      },
      comments: {
        type: Sequelize.STRING(255),
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable("Reviews");
  },
};
