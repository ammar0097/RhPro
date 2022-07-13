const Employee = require("../models/employee");

const getAllEmployees = (req, res, next) => {
  Employee.findAll()
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.json(err);
    });

 
};

const addEmployee = (req, res, next) => {
  const name = req.body.name;
  const age = req.body.age;
  const country = req.body.country;
  const position = req.body.position;
  const salary = req.body.salary;

  Employee.create({
    name: name,
    age: age,
    country: country,
    position: position,
    salary: salary,
  })
    .then(res.json({ message: "added with success" }))
    .catch(res.json({ message: "error" }));
};




exports.addEmployee = addEmployee;
exports.getAllEmployees = getAllEmployees;
