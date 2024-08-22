'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('meet_greets', {
      event_id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      band_id: {
        type: Sequelize.SMALLINT,
        allowNull: false,
      },
      meet_start_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      meet_end_time: {
        type: Sequelize.TIME,
        allowNull: false,
      },
      meet_greet_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('meet_greets');
  }
};
