const express = require("express");
const router = express.Router();
const bookController = require("../controllers/book-controller")
const Book = require("../model/Book")

router.get('/', bookController.getAllBooks);

router.post('/add', bookController.addBook)

router.get('/:id', bookController.getOne)

router.put('/:id', bookController.updateBook)

router.delete('/:id', bookController.deleteBook)

module.exports = router;