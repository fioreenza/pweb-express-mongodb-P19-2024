"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BookService = void 0;
const book_model_1 = __importDefault(require("../models/book.model"));
class BookService {
    async getAllBooks() {
        return await book_model_1.default.find();
    }
    async getBookById(id) {
        return await book_model_1.default.findById(id);
    }
    async addNewBook(bookData) {
        const newBook = new book_model_1.default(bookData);
        return await newBook.save();
    }
    async updateBook(id, bookData) {
        return await book_model_1.default.findByIdAndUpdate(id, bookData, { new: true });
    }
    async deleteBook(id) {
        return await book_model_1.default.findByIdAndDelete(id);
    }
}
exports.BookService = BookService;
exports.default = new BookService();
//# sourceMappingURL=book.service.js.map