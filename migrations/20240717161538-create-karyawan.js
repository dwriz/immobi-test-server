"use strict";
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable("Karyawan", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      id_jabatan: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: {
          model: "Jabatan",
          key: "id",
        },
      },
      age: {
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      gender: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      tanggal_lahir: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      alamat: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable("Karyawan");
  },
};
