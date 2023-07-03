const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    birthYear: {
        type: Number,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    books: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Book"
        }
    ],
    imageUrl: {
        type: String,
        required: true
    }
})

const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    }, 
    price: {
        type: Number,
        required: true
    },
    genres: [
        String
    ],
    publishDate: {
        type: Number
    },
    author: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Author"
    },
    description: {
        type: String,
        required: true
    },
    imageUrl: {
        type: String,
        required: true
    }
})

const Author = mongoose.model("Author", authorSchema);
const Book = mongoose.model("Book", bookSchema);

module.exports = { Author, Book };