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
    if (bookData.qty <= 0) {
      throw new Error('Quantity must be greater than 0');
    }
    if (bookData.initialQty <= 0) {
      throw new Error('Initial quantity must be greater than 0');
    }
    if (bookData.qty > (bookData.initialQty || 0)) {
      throw new Error('Quantity cannot be greater than initial quantity');
    }

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
