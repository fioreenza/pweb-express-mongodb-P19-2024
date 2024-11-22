"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteBook = exports.updateBook = exports.addNewBook = exports.getBookById = exports.getAllBooks = void 0;
const book_service_1 = __importDefault(require("../services/book.service"));
const getAllBooks = async (req, res) => {
    try {
        const books = await book_service_1.default.getAllBooks();
        res.status(200).json({
            status: 'success',
            message: 'Successfully get all books',
            data: books,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get books',
            data: [],
        });
    }
};
exports.getAllBooks = getAllBooks;
const getBookById = async (req, res, next) => {
    try {
        const book = await book_service_1.default.getBookById(req.params.id);
        if (!book) {
            return res.status(404).json({
                status: 'error',
                message: 'Book not found',
                data: {},
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Successfully get book',
            data: book,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to get book',
            data: {},
        });
    }
};
exports.getBookById = getBookById;
const addNewBook = async (req, res) => {
    try {
        const bookData = req.body;
        const newBook = await book_service_1.default.addNewBook(bookData);
        res.status(201).json({
            status: 'success',
            message: 'Book added successfully',
            data: { book: newBook },
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to add book',
            data: {},
        });
    }
};
exports.addNewBook = addNewBook;
const updateBook = async (req, res, next) => {
    try {
        const updatedBook = await book_service_1.default.updateBook(req.params.id, req.body);
        if (!updatedBook) {
            return res.status(404).json({
                status: 'error',
                message: 'Book not found',
                data: {},
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Successfully update book',
            data: updatedBook,
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to update book',
            data: {},
        });
    }
};
exports.updateBook = updateBook;
const deleteBook = async (req, res, next) => {
    try {
        const deletedBook = await book_service_1.default.deleteBook(req.params.id);
        if (!deletedBook) {
            return res.status(404).json({
                status: 'error',
                message: 'Book not found',
                data: {},
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Successfully remove book',
        });
    }
    catch (error) {
        res.status(500).json({
            status: 'error',
            message: 'Failed to delete book',
        });
    }
};
exports.deleteBook = deleteBook;
//# sourceMappingURL=book.controller.js.map