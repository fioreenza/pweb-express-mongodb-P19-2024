import Book from '../models/book.model';

export const borrowBookService = async (bookId: string) => {
  try {
    // Find the book by its ID
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }

    // Check if the book's quantity is greater than 1
    if (book.qty === 0) {
      throw new Error('Book is not available');
    }

    // Decrease the quantity by 1
    book.qty -= 1;
    await book.save();

    return book.qty;
  } catch (error) {
    throw error;
  }
};

export const returnBookService = async (bookId: string) => {
  try {
    // Find the book by its ID
    const book = await Book.findById(bookId);
    if (!book) {
      throw new Error('Book not found');
    }

    // Increase the quantity by 1 when the book is returned
    book.qty += 1;
    await book.save();

    return book.qty;
  } catch (error) {
    throw error;
  }
};
