// src/services/book.service.ts
import Book, { Book as BookInterface } from '../models/book.model';

export class BookService {
  async getAllBooks() {
    return await Book.find();
  }

  async getBookById(id: string) {
    return await Book.findById(id);
  }

  async addNewBook(bookData: Partial<BookInterface>) {
    const newBook = new Book(bookData);
    return await newBook.save();
  }

  async updateBook(id: string, bookData: Partial<BookInterface>) {
    return await Book.findByIdAndUpdate(id, bookData, { new: true });
  }

  async deleteBook(id: string) {
    return await Book.findByIdAndDelete(id);
  }
}

export default new BookService();
