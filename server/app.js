const express = require('express');
const bodyParser = require('body-parser');
const sequelize = require('./util/database');
var cors = require('cors')

const employeesRoutes = require('./routes/employees-routes');

const app = express();
app.use(cors())

app.use(bodyParser.json());


app.use('/employees',employeesRoutes);

sequelize.sync().then(
    app.listen(3001, () => {
        console.log('hello from express');
    })).catch(err => {
        console.log(err);
    });


