// make employee model schema

const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const employeeSchema = new Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },

  employeeId: {
    type: Number,
    required: true,
    // unique: true,
    default: 10000,
    // index: true,
  },

  email: {
    type: String,
    required: true,
    unique: true,
  },

  mobile: {
    type: Number,
    required: true,
    unique: true,
    },
  
});


const Employee = mongoose.model("employee", employeeSchema);

module.exports = Employee;