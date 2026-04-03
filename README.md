# 📚 Book Recommendation Platform - Frontend

## 📖 Overview

This is the frontend of the Book Recommendation Platform built using React.
It provides a user interface to manage books by interacting with the backend API.

---

## ⚙️ Technologies Used

* React.js
* Axios
* JavaScript (ES6)
* HTML & CSS

---

## 🚀 Features

* View all books
* Add new books
* Update existing books
* Delete books

---

## 🔗 API Integration

The frontend communicates with the backend using REST API:

Base URL:
http://localhost:5000/api

Endpoints used:

* GET /books
* POST /books
* PUT /books/:id
* DELETE /books/:id

---

## 🚀 How to Run

1. Navigate to frontend folder:

```
cd frontend
```

2. Install dependencies:

```
npm install
```

3. Start the app:

```
npm start
```

4. Open browser:

```
http://localhost:3000
```

---

## 📌 Notes

* Ensure backend server is running before starting frontend
* Backend runs on port 5000
* Frontend runs on port 3000

---

## 👩‍💻 Author

Jennifer Uy

## 🔐 Authentication System

The application includes a secure authentication system implemented using:

* **bcryptjs** for password hashing
* **JSON Web Tokens (JWT)** for authentication
* **Protected API routes** for book operations

### Features:

* User registration
* User login
* Token-based authentication
* Protected CRUD operations

### Flow:

1. User registers → data saved in MongoDB
2. User logs in → receives JWT token
3. Token stored in localStorage
4. Token sent with every API request
