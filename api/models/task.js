'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class ToDo extends Model {}

  ToDo.init(
    {
      title: {
        type: DataTypes.STRING,     
      },
      content: {
        type: DataTypes.STRING,  
      },
      type: {
        type: DataTypes.STRING,
      },
    },

    {
      sequelize,
      modelName: "ToDo",
    }
  );

  ToDo.associate = (models) => {
    // associations can be defined here
  };

  return ToDo;
};