'use strict';
const { DataTypes } = require('sequelize')

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    // • The first argument accepts is the name of the table.
    // •• The second argument it takes is the name of the column we would like to add.
    // ••• The third argument it takes is an options object to specify the column's datatype.
    await queryInterface.addColumn('Bands', 'recommendation', {
      type: DataTypes.STRING
    })
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add reverting commands here.
     *
     * Example:
     * await queryInterface.dropTable('users');
     */
  }
};
