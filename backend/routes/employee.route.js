const express = require("express");
const router = express.Router();

const {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
} = require("../controllers/employee.controller");

// create a new employee
router.post("/create", createEmployee);

// get all employees
router.get("/get", getAllEmployees);

// get employee by id
router.get("/get/:id", getEmployeeById);

// update employee by id
router.put("/update/:id", updateEmployeeById);

// delete employee by id
router.delete("/delete/:id", deleteEmployeeById);

module.exports = router;
