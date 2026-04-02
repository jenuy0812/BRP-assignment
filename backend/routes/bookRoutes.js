const express = require("express");
const router = express.Router();

const {
  createBook,
  getBooks,
  getBookById,
  updateBook,
  deleteBook,
} = require("../controllers/bookController");

router.post("/", createBook);        // CREATE
router.get("/", getBooks);           // READ all
router.get("/:id", getBookById);     // READ one
router.put("/:id", updateBook);      // UPDATE
router.delete("/:id", deleteBook);   // DELETE

module.exports = router;