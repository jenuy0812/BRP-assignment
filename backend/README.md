# 📚 Book Recommendation Platform - Backend

##  Overview

This project is the backend of a Book Recommendation Platform developed using Node.js, Express, and MongoDB.
It provides RESTful API endpoints to perform CRUD (Create, Read, Update, Delete) operations on book data.

---

##  Technologies Used

* Node.js
* Express.js
* MongoDB Atlas
* Mongoose
* dotenv
* CORS

---

##  Project Structure

backend/
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
├── package.json

---

##  Installation & Setup

### 1. Clone the repository

```
git clone <your-repo-link>
```

### 2. Navigate to backend folder

```
cd backend
```

### 3. Install dependencies

```
npm install
```

### 4. Configure environment variables

Create a `.env` file and add:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
```

### 5. Run the server

```
node server.js
```

---

##  API Endpoints

###  Get all books

GET /api/books

###  Create a book

POST /api/books

Example request body:

```
{
  "title": "Harry Potter",
  "author": "J.K. Rowling",
  "year": 2001
}
```

###  Update a book

PUT /api/books/:id

###  Delete a book

DELETE /api/books/:id

---

##  Testing

The API was tested using Thunder Client and browser.
Successful responses confirm proper connection to MongoDB and correct API functionality.

---

##  Author

Jennifer Uy

---

##  Notes

* Server runs on http://localhost:5000
* MongoDB Atlas is used for database connection
* Ensure `.env` file is correctly configured before running the project
⚙️ Technologies Used
Node.js
Express.js
MongoDB Atlas
Mongoose
dotenv
CORS

📁 Project Structure

backend/
├── controllers/
├── models/
├── routes/
├── .env
├── server.js
├── package.json
Installation & Setup
1. Clone the repository
git clone <your-repo-link>
2. Navigate to backend folder
cd backend
3. Install dependencies
npm install
4. Configure environment variables

Create a .env file and add:

PORT=5000
MONGO_URI=your_mongodb_connection_string
5. Run the server
node server.js
API Endpoints
📌 Get all books

GET /api/books

📌 Create a book

POST /api/books

Example request body:

{
  "title": "Harry Potter",
  "author": "J.K. Rowling",
  "year": 2001
}
📌 Update a book

PUT /api/books/

📌 Delete a book

DELETE /api/books/

Testing

The API was tested using Thunder Client and browser.
Successful responses confirm proper connection to MongoDB and correct API functionality.

Author

Jennifer Uy

Notes
Server runs on http://localhost:5000
MongoDB Atlas is used for database connection
Ensure .env file is correctly configured before running the project

5. Backend verifies token before allowing access
 Mocha is used as the test runner, Chai is used for assertions, and Sinon is used for mocking and spying on functions. The test cases verify application logic without requiring a database connection, ensuring reliability before deployment.


 The test imports chai for assertions, sinon for mocking database calls, mongoose for database structure, and the Book model and controller. The database call is stubbed using sinon to simulate returning data without accessing the actual database.

 The describe() block is used to group related test cases for the createBook function. The it() block defines an individual test case that verifies whether a book is successfully created. The request body is simulated, and the database save operation is mocked using Sinon to avoid real database interaction.

 The test case uses the it() function to define a scenario where a new book is successfully created. A mock request object is used to simulate incoming HTTP data. Sinon is used to stub the database save operation, and Chai assertions verify that the correct response is returned.

A mock book object is created to simulate the expected database output. The Book.create method is stubbed using Sinon to prevent actual database interaction. A mock response object is used to capture status and JSON output. The test verifies that the function correctly creates a book and returns the expected response.