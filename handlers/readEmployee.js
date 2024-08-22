const Employee = require('../models/employee');
const connectToDatabase = require('../db');

module.exports.readEmployee = async (event) => {
    await connectToDatabase();
    const { id } = event.pathParameters;
    try {
      const employee = await Employee.findById(id);
      if (!employee) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: 'Employee not found' }),
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify(employee),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Could not retrieve employee', err }),
      };
    }
  };
 
module.exports.listEmployees = async () => {
    await connectToDatabase();
    try {
      const employees = await Employee.find();
      return {
        statusCode: 200,
        body: JSON.stringify(employees),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Could not retrieve employees', err }),
      };
    }
  }; 