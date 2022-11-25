const Employee = require("../models/employee.model");

let response = {
  status: false,
  message: "",
  data: null,
};

const createEmployee = async (req, res) => {
  try {
    const { firstName, lastName, email, mobile } = req.body;
    await Employee.create({
      firstName,
      lastName,
      email,
      mobile,
    })
      .then((result) => {
        response.status = true;
        response.message = "Employee added successfully";
        response.data = result;
        return res.status(200).json(response);
      })
      .catch((err) => {
        response.status = false;
        response.message = err.message;
        response.data = err;
        console.log(response);
        return res.status(400).json(response);
      });
  } catch (e) {
    return res.status(400).send(e);
  }
};

const getAllEmployees = async (req, res) => {
  try {
    await Employee.find()
      .then((result) => {
        response.status = true;
        response.message = "Employee list";
        response.data = { count: result.length, data: result };
        return res.status(200).json(response);
      })
      .catch((err) => {
        response.status = false;
        response.message = err.message;
        response.data = err;
        return res.status(400).json(response);
      });
  } catch (e) {
    return res.status(400).send(e);
  }
};

const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    await Employee.findById(id)
      .then((result) => {
        response.status = true;
        response.message = "Employee found";
        response.data = result;
        return res.status(200).json(response);
      })
      .catch((err) => {
        response.status = false;
        response.message = err.message;
        response.data = err;
        return res.status(400).json(response);
      });
  } catch (e) {
    return res.status(400).send(e);
  }
};

const updateEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;
    const { firstName, lastName, email, mobile } = req.body;

    const employee = await Employee.findById(id);

    if (!employee) {
      response.status = false;
      response.message = "Employee not found";
      response.data = null;
      return res.status(400).json(response);
    }

    await Employee.findByIdAndUpdate(
      id,
      {
        firstName,
        lastName,
        email,
        mobile,
      },
      { new: true }
    )
      .then((result) => {
        response.status = true;
        response.message = "Employee updated successfully";
        response.data = result;
        return res.status(200).json(response);
      })
      .catch((err) => {
        response.status = false;
        response.message = err.message;
        response.data = err;
        return res.status(400).json(response);
      });
  } catch (e) {
    return res.status(400).send(e);
  }
};

const deleteEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const employee = await Employee.findById(id);

    if (!employee) {
      response.status = false;
      response.message = "Employee not found";
      response.data = null;
      return res.status(400).json(response);
    }

    await Employee.findByIdAndDelete(id)
      .then((result) => {
        response.status = true;
        response.message = "Employee deleted successfully";
        response.data = result;
        return res.status(200).json(response);
      })
      .catch((err) => {
        response.status = false;
        response.message = err.message;
        response.data = err;
        return res.status(400).json(response);
      });
  } catch (e) {
    return res.status(400).send(e);
  }
};

module.exports = {
  createEmployee,
  getAllEmployees,
  getEmployeeById,
  updateEmployeeById,
  deleteEmployeeById,
};
