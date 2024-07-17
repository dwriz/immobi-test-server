"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Jabatan extends Model {
    static associate(models) {
      Jabatan.belongsTo(models.Department, { foreignKey: "id_department" });
      Jabatan.hasMany(models.Karyawan, { foreignKey: "id_jabatan" });
    }
  }
  Jabatan.init(
    {
      id_department: DataTypes.INTEGER,
      nama_jabatan: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Jabatan",
    }
  );
  return Jabatan;
};
