const jwt = require('jsonwebtoken');

// Policy helper function
const generatePolicy = (principalId, effect, resource) => {
    // Required output:
    var authResponse = {};
    authResponse.principalId = principalId;
    if (effect && resource) {
        var policyDocument = {
            Version: '2012-10-17',
            Statement: [
                {
                    Effect: effect,
                    Action: 'execute-api:Invoke',
                    Resource: resource,
                }
            ]
        };
        authResponse.policyDocument = policyDocument;
    }
    console.log(authResponse);
    return authResponse;
  }

module.exports.authenticate = async (event, context, callback) => {
  const headers = event.headers || {};
  const token = headers.Authorization || headers.authorization;

  if (!token || !headers) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Unauthorized', headers: headers }),
    };
  }
  try {
    jwt.verify(token, process.env.JWT_SECRET, (err, decoded)=> {
        if (err)
            return callback(null, 'Unauthorized');
      
        // if everything is good, save to request for use in other routes
        return callback(null, generatePolicy(decoded.username, 'Allow', event.methodArn))
    });
  } catch (err) {
    return {
      statusCode: 401,
      body: JSON.stringify({ message: 'Invalid token' }),
    };
  }
};