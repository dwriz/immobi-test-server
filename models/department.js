"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Department extends Model {
    static associate(models) {
      Department.hasMany(models.Jabatan, { foreignKey: "id_department" });
    }
  }
  Department.init(
    {
      nama_department: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Department",
      tableName: "Department",
    }
  );
  return Department;
};
