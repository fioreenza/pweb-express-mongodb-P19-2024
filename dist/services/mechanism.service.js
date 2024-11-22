"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBookService = exports.borrowBookService = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
const borrowBookService = async (bookId) => {
    try {
        const book = await book_model_1.default.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        if (book.qty === 0) {
            throw new Error('Book is not available');
        }
        book.qty -= 1;
        await book.save();
        return book.qty;
    }
    catch (error) {
        throw error;
    }
};
exports.borrowBookService = borrowBookService;
const returnBookService = async (bookId) => {
    try {
        const book = await book_model_1.default.findById(bookId);
        if (!book) {
            throw new Error('Book not found');
        }
        book.qty += 1;
        await book.save();
        return book.qty;
    }
    catch (error) {
        throw error;
    }
};
exports.returnBookService = returnBookService;
//# sourceMappingURL=mechanism.service.js.map