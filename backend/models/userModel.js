"use strict";

module.exports = function (sequelize, DataTypes) {
  const userModel = sequelize.define(
    "userModel",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      username: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      password: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      tableName: "users",
      schema: "public",
      timestamps: false,
    }
  );

  return userModel;
};
