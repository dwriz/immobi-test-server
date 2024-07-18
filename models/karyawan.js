"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Karyawan extends Model {
    static associate(models) {
      Karyawan.belongsTo(models.Jabatan, { foreignKey: "id_jabatan" });
    }
  }
  Karyawan.init(
    {
      name: DataTypes.STRING,
      id_jabatan: DataTypes.INTEGER,
      age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      tanggal_lahir: DataTypes.DATE,
      alamat: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Karyawan",
      tableName: "Karyawan",
    }
  );
  return Karyawan;
};
