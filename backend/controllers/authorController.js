const { Book, Author } = require("../model/model");

const authorController = {
    // ADD AUTHOR
    addAuthor: async (req, res) => {
        try {
            const newAuthor = new Author(req.body);
            const savedAuthor = await newAuthor.save();
            res.status(200).json(savedAuthor);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // GET ALL AUTHOR
    getAllAuthors: async (req, res) => {
        try {
            const allAuthors = await Author.find();
            res.status(200).json(allAuthors);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // GET A BOOK
    getAuthor: async (req, res) => {
        try {
            const author = await Author.findById(req.params.id).populate("books");
            res.status(200).json(author);
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // UPDATE AUTHOR
    updateAuthor: async (req, res) => {
        try {
            const author = Author.findById(req.params.id);
            await author.updateOne({$set: req.body});
            res.status(200).json("Updated successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    },

    // DELETE AUTHOR
    deleteAuthor: async (req, res) => {
        try {
            await Book.updateMany({author: req.params.id}, {author: null});
            await Author.findByIdAndDelete(req.params.id);
            res.status(200).json("Deleted successfully");
        } catch (error) {
            res.status(500).json(error);
        }
    }
}

module.exports = authorController;