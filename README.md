# serverless-emp-curd-api
This is Employees curd api based on serverless framework. 
## Document: Setting Up and Running the Serverless Employee CRUD API Locally
This document will guide you through setting up and running the Serverless Employee CRUD API locally using the Serverless Framework with the serverless-offline plugin. It also provides an overview of the application and instructions on testing the API using Postman.

### Prerequisites
Node.js: Ensure you have Node.js installed.
Serverless Framework: Install the Serverless Framework globally if you haven’t already.
MongoDB: A MongoDB instance running locally or in the cloud (e.g., MongoDB Atlas).
Postman: For testing the API endpoints.
#### Step 1: Clone the Repository
If you haven’t done so already, clone the repository that contains the Serverless Employee CRUD API.

git clone <repository-url>
cd <repository-directory>
#### Step 2: Install Dependencies
Navigate to the root directory of your project and install the required dependencies.

npm install
#### Step 3: Configure MongoDB Connection
Set up your MongoDB connection string in the environment variables. This can be done by creating a .env file in the root of your project:

plaintext
Copy code
MONGO_URI=mongodb://<username>:<password>@<host>:<port>/<database-name>
#### Step 4: Deploy the Application (Optional)
To deploy the application to AWS, run the following command:

serverless deploy
#### Step 5: Running the Application Locally
To run the application locally, use the serverless-offline plugin. This simulates AWS Lambda and API Gateway locally.

serverless offline start
The application will now be running on http://localhost:3000.

#### Step 6: Overview of the Application<br/>
The application is a CRUD API for managing employees, built using the Serverless Framework with MongoDB as the database. It consists of the following endpoints:<br/>

Generate Token (POST /auth/token): Generates a JWT token for authenticating subsequent requests. <br/> 
Create Employee (POST /employees): Creates a new employee.<br/>
Get All Employees (GET /employees): Retrieves a list of all employees.<br/>
Get Employee by ID (GET /employees/{id}): Retrieves details of a specific employee.<br/>
Update Employee by ID (PUT /employees/{id}): Updates the details of a specific employee.<br/>
Delete Employee by ID (DELETE /employees/{id}): Deletes a specific employee.<br/>

#### Step 7: Testing with Postman<br/>
Postman is used for testing the API endpoints. The provided Postman collection includes all the necessary requests.

Import the Collection and Environment:

Import the serverless-emp-curd-api.postman_collection.json collection.
Import the workspace.postman_globals.json environment.
Generate Token:

Send a POST request to /auth/token with the appropriate username and password to get a token.
The token will be stored in the Postman environment as AUTH_TOKEN.
CRUD Operations:

Use the provided requests in the Postman collection to perform create, read, update, and delete operations on employees.
The Authorization header in each request will automatically use the AUTH_TOKEN stored in the environment.
Troubleshooting
MongoDB Connection Issues:

Ensure that your MongoDB connection string is correct and that your MongoDB instance is running.
Serverless Offline Not Running:

Ensure that you have installed the serverless-offline plugin. If not, install it using npm install serverless-offline.
Authorization Errors:

Ensure that you generate a valid token and that it is correctly passed in the Authorization header in your requests.
