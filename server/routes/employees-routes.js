const express = require('express');

const router = express.Router();

const employeeController = require('../controllers/employee-controller');



router.get('/',employeeController.getAllEmployees);
router.post('/add',employeeController.addEmployee);
router.delete('/:id',employeeController.deleteEmployee);



module.exports = router;