const express = require('express');
const bodyParser = require('body-parser');

const employeesRoutes = require('./routes/employees-routes');

const app = express();

app.use('/employees',employeesRoutes);

app.listen(3000);