'use strict';
const { Model } = require('sequelize');


module.exports = (sequelize, DataTypes) => {
  class Task extends Model {}

  Task.init({
    content: {
      type: DataTypes.STRING, 
    },
  },
  {
      sequelize,
      modelName: 'task',
    });


  return Task;
};
