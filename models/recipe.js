'use strict';
const {
  Model,DataTypes} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Recipe extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Recipe.init({
    id: {
      type:DataTypes.INTEGER,
      allowNull:false,
      primaryKey:true,
      autoIncrement:true,
    },
    title: {
      type:DataTypes.STRING,
      allowNull:false,
      validate:{
        min:3,
      },

    },
    description: {
      type:DataTypes.TEXT,
      validate:{
        max:500,
      },
    },
    ingredients: {
      type:DataTypes.TEXT,
      validate:{
        max:1000,
      },
    },
    instructions: {
      type:DataTypes.TEXT,
      validate:{
        max:5000,
      },
    },
    createdAt: {
      type:DataTypes.DATE,
    },
    updatedAt: {
      type:DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'Recipe',
  });
  return Recipe;
};