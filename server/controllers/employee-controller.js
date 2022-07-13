const Employee = require("../models/employee");

const getAllEmployees = (req, res, next) => {
  console.log("GET Request in Places");
  res.json({ message: "It works!" });
};

exports.getAllEmployees = getAllEmployees;




