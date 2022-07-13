const Sequelize = require('sequelize');
const sequelize = require("../util/database");

const Employee = sequelize.define('employee',{
    id : {
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : Sequelize.STRING,
    age : Sequelize.INTEGER,
    country : Sequelize.STRING,
    position : Sequelize.STRING,
    salary : Sequelize.DOUBLE,
});
    
module.exports = Employee;