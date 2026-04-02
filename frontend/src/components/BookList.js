import React from "react";

function BookList({ books, onEdit, onDelete }) {
  if (books.length === 0) {
    return <p>No books found.</p>;
  }

  return (
    <div>
      <h2>Book List</h2>

      {books.map((book) => (
        <div
          key={book._id}
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            padding: "15px",
            marginBottom: "15px",
          }}
        >
          <p><strong>Title:</strong> {book.title}</p>
          <p><strong>Author:</strong> {book.author}</p>
          <p><strong>Year:</strong> {book.year}</p>

          <button
            onClick={() => onEdit(book)}
            style={{ marginRight: "10px", padding: "8px 12px" }}
          >
            Edit
          </button>

          <button
            onClick={() => onDelete(book._id)}
            style={{ padding: "8px 12px" }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default BookList;