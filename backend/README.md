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