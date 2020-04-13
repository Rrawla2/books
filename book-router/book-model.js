const db = require('../data/db-config.js')

function getAll() {
    return db('books')
}

function addBook(book) {
    return db('books').insert(book).returning('*')
}

module.exports = {getAll, addBook}