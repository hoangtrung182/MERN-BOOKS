const router = require("express").Router();
const bookController = require("../controllers/bookController");

// ADD BOOK
router.post("/", bookController.addBook);

// GET ALL BOOKS
router.get("/", bookController.getAllBooks);

// GET A BOOK
router.get("/:id", bookController.getBook);

// UPDATE BOOK
router.put("/:id", bookController.updateBook);

// DELETE BOOK
router.delete("/:id", bookController.deleteBook);

module.exports = router;