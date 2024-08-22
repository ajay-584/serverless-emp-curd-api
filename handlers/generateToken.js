const jwt = require('jsonwebtoken');

module.exports.generateToken = async (event) => {
    const { username, password } = JSON.parse(event.body);
    console.log("Body data", username, password);
    if (username && password) {
      const token = jwt.sign({ username }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return {
        statusCode: 200,
        body: JSON.stringify({ token }),
      };
    }
    return {
      statusCode: 400,
      body: JSON.stringify({ message: 'Invalid credentials' }),
    };
  }; 