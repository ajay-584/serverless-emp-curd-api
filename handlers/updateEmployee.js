const Employee = require('../models/employee');
const connectToDatabase = require('../db');
module.exports.updateEmployee = async (event) => {
    await connectToDatabase();
    const { id } = event.pathParameters;
    const data = JSON.parse(event.body);
    try {
      const employee = await Employee.findByIdAndUpdate(id, data, { new: true });
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
        body: JSON.stringify({ message: 'Could not update employee', err }),
      };
    }
  }; 