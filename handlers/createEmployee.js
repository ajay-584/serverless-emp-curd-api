const Employee = require('../models/employee');
const connectToDatabase = require('../db');

module.exports.createEmployee = async (event) => {
    await connectToDatabase();
    const data = JSON.parse(event.body);
    try {
      const employee = await Employee.create(data);
      return {
        statusCode: 201,
        body: JSON.stringify(employee),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Could not create employee', err }),
      };
    }
  }; 