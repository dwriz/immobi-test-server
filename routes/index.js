const express = require("express");
const router = express.Router();

const {
  DepartmentController,
  JabatanController,
  KaryawanController,
} = require("../controllers/controller");

router.post("/departments", DepartmentController.addDepartment);
router.get("/departments", DepartmentController.getDepartments);
router.get("/departments/:id", DepartmentController.getDepartmentById);
router.patch("/departments/:id", DepartmentController.updateDepartment);
router.delete("/departments/:id", DepartmentController.deleteDepartment);

router.post("/positions", JabatanController.addPosition);
router.get("/positions", JabatanController.getPositions);
router.get("/positions/:id", JabatanController.getPositionById);
router.patch("/positions/:id", JabatanController.updatePosition);
router.delete("/positions/:id", JabatanController.deletePosition);

router.post("/employees", KaryawanController.addEmployee);
router.get("/employees", KaryawanController.getEmployees);
router.get("/employees/:id", KaryawanController.getEmployeeById);
router.patch("/employees/:id", KaryawanController.updateEmployee);
router.delete("/employees/:id", KaryawanController.deleteEmployee);

module.exports = router;
