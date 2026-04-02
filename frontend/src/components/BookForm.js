import React, { useState, useEffect } from "react";

function BookForm({ onSubmit, editingBook, clearEdit }) {
  const [formData, setFormData] = useState({
    title: "",
    author: "",
    year: "",
  });

  useEffect(() => {
    if (editingBook) {
      setFormData({
        title: editingBook.title || "",
        author: editingBook.author || "",
        year: editingBook.year || "",
      });
    } else {
      setFormData({
        title: "",
        author: "",
        year: "",
      });
    }
  }, [editingBook]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.title || !formData.author || !formData.year) {
      alert("Please fill in all fields.");
      return;
    }

    onSubmit({
      ...formData,
      year: Number(formData.year),
    });

    if (!editingBook) {
      setFormData({
        title: "",
        author: "",
        year: "",
      });
    }
  };

  return (
    <div style={{ marginBottom: "30px" }}>
      <h2>{editingBook ? "Edit Book" : "Add Book"}</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="title"
          placeholder="Book Title"
          value={formData.title}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "10px", width: "100%" }}
        />

        <input
          type="text"
          name="author"
          placeholder="Author"
          value={formData.author}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "10px", width: "100%" }}
        />

        <input
          type="number"
          name="year"
          placeholder="Year"
          value={formData.year}
          onChange={handleChange}
          style={{ display: "block", marginBottom: "10px", padding: "10px", width: "100%" }}
        />

        <button type="submit" style={{ marginRight: "10px", padding: "10px 16px" }}>
          {editingBook ? "Update Book" : "Add Book"}
        </button>

        {editingBook && (
          <button type="button" onClick={clearEdit} style={{ padding: "10px 16px" }}>
            Cancel
          </button>
        )}
      </form>
    </div>
  );
}

export default BookForm;