const Employee = require('../models/employee');
const connectToDatabase = require('../db');

module.exports.deleteEmployee = async (event) => {
    await connectToDatabase();
    const { id } = event.pathParameters;
    try {
      const employee = await Employee.findByIdAndDelete(id);
      if (!employee) {
        return {
          statusCode: 404,
          body: JSON.stringify({ message: 'Employee not found' }),
        };
      }
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Employee deleted' }),
      };
    } catch (err) {
      return {
        statusCode: 500,
        body: JSON.stringify({ message: 'Could not delete employee', err }),
      };
    }
  }; 