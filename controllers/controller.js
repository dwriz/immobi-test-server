const { Department, Jabatan, Karyawan } = require("../models");

class DepartmentController {
  static async addDepartment(req, res) {
    try {
      const { nama_department } = req.body;

      await Department.create({ nama_department });

      res.status(201).json({ message: "add department success" });
    } catch (error) {
      res.send(error);
    }
  }

  static async getDepartments(req, res) {
    try {
      const departments = await Department.findAll();

      res.status(200).json(departments);
    } catch (error) {
      res.send(error);
    }
  }

  static async getDepartmentById(req, res) {
    try {
      const { id } = req.params;

      const department = await Department.findByPk(id);

      if (!department) {
        return res.status(404).json({ message: "department not found" });
      }

      res.status(200).json(department);
    } catch (error) {
      res.send(error);
    }
  }

  static async updateDepartment(req, res) {
    try {
      const { id } = req.params;
      const { nama_department } = req.body;

      const [updatedRow] = await Department.update(
        { nama_department },
        { where: { id } }
      );

      if (updatedRow === 0) {
        return res.status(404).json({ message: "department not found" });
      }

      res.status(200).json({ message: "update department success" });
    } catch (error) {
      res.send(error);
    }
  }

  static async deleteDepartment(req, res) {
    try {
      const { id } = req.params;

      const deletedRow = await Department.destroy({ where: { id } });

      if (deletedRow === 0) {
        return res.status(404).json({ message: "department not found" });
      }

      res.status(200).json({ message: "delete department success" });
    } catch (error) {
      res.send(error);
    }
  }
}

class JabatanController {
  static async addPosition(req, res) {
    try {
      const { id_department, nama_jabatan } = req.body;

      await Jabatan.create({ id_department, nama_jabatan });

      res.status(201).json({ message: "add position success" });
    } catch (error) {
      res.send(error);
    }
  }

  static async getPositions(req, res) {
    try {
      const positions = await Jabatan.findAll();

      res.status(200).json(positions);
    } catch (error) {
      res.send(error);
    }
  }

  static async getPositionById(req, res) {
    try {
      const { id } = req.params;

      const position = await Jabatan.findByPk(id);

      if (!position) {
        return res.status(404).json({ message: "position not found" });
      }

      res.status(200).json(position);
    } catch (error) {
      res.send(error);
    }
  }

  static async updatePosition(req, res) {
    try {
      const { id } = req.params;
      const { id_department, nama_jabatan } = req.body;

      const [updatedRow] = await Jabatan.update(
        { id_department, nama_jabatan },
        { where: { id } }
      );

      if (updatedRow === 0) {
        return res.status(404).json({ message: "position not found" });
      }

      res.status(200).json({ message: "update position success" });
    } catch (error) {
      res.send(error);
    }
  }

  static async deletePosition(req, res) {
    try {
      const { id } = req.params;

      const deletedRow = await Jabatan.destroy({ where: { id } });

      if (deletedRow === 0) {
        return res.status(404).json({ message: "position not found" });
      }

      res.status(200).json({ message: "delete position success" });
    } catch (error) {
      res.send(error);
    }
  }
}

class KaryawanController {
  static async addEmployee(req, res) {
    try {
      const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;

      await Karyawan.create({
        name,
        id_jabatan,
        age,
        gender,
        tanggal_lahir,
        alamat,
      });

      res.status(201).json({ message: "add employee success" });
    } catch (error) {
      res.send(error);
    }
  }

  static async getEmployees(req, res) {
    try {
      const employees = await Karyawan.findAll();

      res.status(200).json(employees);
    } catch (error) {
      res.send(error);
    }
  }

  static async getEmployeeById(req, res) {
    try {
      const { id } = req.params;

      const employee = await Karyawan.findByPk(id);

      if (!employee) {
        return res.status(404).json({ message: "employee not found" });
      }

      res.status(200).json(employee);
    } catch (error) {
      res.send(error);
    }
  }

  static async updateEmployee(req, res) {
    try {
      const { id } = req.params;
      const { name, id_jabatan, age, gender, tanggal_lahir, alamat } = req.body;

      const [updatedRow] = await Karyawan.update(
        { name, id_jabatan, age, gender, tanggal_lahir, alamat },
        { where: { id } }
      );

      if (updatedRow === 0) {
        return res.status(404).json({ message: "employee not found" });
      }

      res.status(200).json({ message: "update employee success" });
    } catch (error) {
      res.send(error);
    }
  }

  static async deleteEmployee(req, res) {
    try {
      const { id } = req.params;

      const deletedRow = await Karyawan.destroy({ where: { id } });

      if (deletedRow === 0) {
        return res.status(404).json({ message: "employee not found" });
      }

      res.status(200).json({ message: "delete employee success" });
    } catch (error) {
      res.send(error);
    }
  }
}

module.exports = {
  DepartmentController,
  JabatanController,
  KaryawanController,
};
