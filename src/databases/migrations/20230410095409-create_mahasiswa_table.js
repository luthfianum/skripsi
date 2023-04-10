'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable('mahasiswa', {
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable('mahasiswa');
}
