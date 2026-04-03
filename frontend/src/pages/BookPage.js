import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../axiosConfig";
import BookForm from "../components/BookForm";
import BookList from "../components/BookList";

function BookPage() {
  const [books, setBooks] = useState([]);
  const [editingBook, setEditingBook] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = localStorage.getItem("userInfo");
    if (!userInfo) {
      navigate("/");
      return;
    }
    fetchBooks();
  }, [navigate]);

  const fetchBooks = async () => {
    try {
      const response = await API.get("/books");
      setBooks(response.data);
    } catch (error) {
      console.error("Error fetching books:", error);
    }
  };

  const handleAddOrUpdate = async (bookData) => {
    try {
      if (editingBook) {
        await API.put(`/books/${editingBook._id}`, bookData);
        setEditingBook(null);
      } else {
        await API.post("/books", bookData);
      }
      fetchBooks();
    } catch (error) {
      console.error("Error saving book:", error);
    }
  };

  const handleEdit = (book) => {
    setEditingBook(book);
  };

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this book?");
    if (!confirmDelete) return;

    try {
      await API.delete(`/books/${id}`);
      fetchBooks();
    } catch (error) {
      console.error("Error deleting book:", error);
    }
  };

  const clearEdit = () => {
    setEditingBook(null);
  };

  const handleLogout = () => {
    localStorage.removeItem("userInfo");
    navigate("/");
  };

  return (
    <div
      style={{
        maxWidth: "800px",
        margin: "30px auto",
        padding: "20px",
        background: "#fff",
        borderRadius: "10px",
        boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1>Book Recommendation Platform</h1>
        <button onClick={handleLogout} style={{ padding: "10px 14px" }}>
          Logout
        </button>
      </div>

      <BookForm
        onSubmit={handleAddOrUpdate}
        editingBook={editingBook}
        clearEdit={clearEdit}
      />

      <BookList books={books} onEdit={handleEdit} onDelete={handleDelete} />
    </div>
  );
}

export default BookPage;