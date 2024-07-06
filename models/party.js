'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Party extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Party.init({
    party_id: DataTypes.INTEGER,
    event_name: DataTypes.STRING,
    stage: DataTypes.TEXT,
    avalible_set_time: DataTypes.DATE,
    meet_greet: DataTypes.DATE,
    end_time: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Party',
  });
  return Party;
};