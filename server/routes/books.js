const express = require("express");
const router = express.Router();
const Book = require("../models/Book");

// Add book
router.post("/", async (req, res) => {
  try {
    const book = new Book(req.body);
    await book.save();
    res.json({ message: "Book added successfully", book });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all books
router.get("/", async (req, res) => {
  try {
    const books = await Book.find();
    res.json(books);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
