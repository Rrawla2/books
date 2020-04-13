const express = require("express")

const books = require('./book-model')

const router = express.Router()

router.get('/', (req, res) => {
    books.getAll()
        .then(item => {
            res.status(200).json(item)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not retrieve books" })
        })
})

router.post('/', (req, res) => {
    books.addBook(req.body)
        .then(item => {
            res.status(201).json(item)
        })
        .catch(err => {
            res.status(500).json({ message: "Could not add a book"})
        })
})

module.exports = router;