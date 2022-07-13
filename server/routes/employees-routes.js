const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/employee-controller');



router.get('/',employeeController.getAllEmployees);
router.post('/add',employeeController.addEmployee);


module.exports = router;