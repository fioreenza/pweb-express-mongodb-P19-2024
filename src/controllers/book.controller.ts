import { Request, Response } from 'express';
import Book, { IBook } from '../models/book.model';

// GET /books - Mendapatkan semua buku
export const getAllBooks = async (req: Request, res: Response): Promise<void> => {
  try {
    const books = await Book.find();
    res.status(200).json({ status: 'success', data: books });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error retrieving books', error });
  }
};

// GET /books/:id - Mendapatkan buku berdasarkan ID
export const getBookById = async (req: Request, res: Response): Promise<void> => {
  try {
    const book = await Book.findById(req.params.id);
    if (!book) {
      res.status(404).json({ status: 'error', message: 'Book not found' });
      return;
    }
    res.status(200).json({ status: 'success', data: book });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error retrieving book', error });
  }
};

// POST /books - Menambahkan buku baru
export const addNewBook = async (req: Request, res: Response): Promise<void> => {
  try {
    const { title, author, publishedDate, genre } = req.body;
    const newBook: IBook = new Book({
      title,
      author,
      publishedDate,
      genre,
      userId: req.body.userId,
    });
    await newBook.save();
    res.status(201).json({ status: 'success', data: newBook });
  } catch (error) {
    res.status(500).json({ status: 'error', message: 'Error adding new book', error });
  }
};
