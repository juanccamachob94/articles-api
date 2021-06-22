'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Article extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Article.init({
    title: {
      allowNull: false,
      type: DataTypes.STRING,
      validate: {
        notEmpty: { msg: 'El título no puede estar vacío' },
        notNull: { msg: 'El título no puede ser nulo' }
      }
    },
    content: {
      allowNull: false,
      type: DataTypes.TEXT,
      validate: {
        notEmpty: { msg: 'El contenido no puede estar vacío' },
        notNull: { msg: 'El contenido no puede ser nulo' }
      }
    }
  }, {
    sequelize,
    modelName: 'Article',
  });
  return Article;
};
