const { Model, DataTypes } = require("sequelize");
const sequelize = require('../config/connection');

class Note extends Model {

}

Note.init(
  {
    id: {
      type: DataTypes.UUIDV1,
      allowNull: false,
      primaryKey: true,
    },
    title: {
      type: DataTypes.STRING,
    },
    content: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    date: {
      type: DataTypes.DATEONLY,
      allowNull: false,
    },
    user_id: {
      
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'note',
  }

);