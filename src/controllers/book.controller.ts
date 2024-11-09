// src/controllers/book.controller.ts
import { Request, Response } from 'express';
import bookService from '../services/book.service';

export const getAllBooks = async (req: Request, res: Response) => {
  try {
    const books = await bookService.getAllBooks();
    res.status(200).json({
      status: 'success',
      message: 'Successfully get all books',
      data: books,
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to get books',
      data: [],
    });
  }
};

export const getBookById = async (req: Request, res: Response, next: unknown) => {
  try {
    const book = await bookService.getBookById(req.params.id);
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
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to get book',
      data: {},
    });
  }
};

export const addNewBook = async (req: Request, res: Response) => {
  try {
    const bookData = req.body;
    const newBook = await bookService.addNewBook(bookData);
    res.status(201).json({
      status: 'success',
      message: 'Book added successfully',
      data: { book: newBook },
    });
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to add book',
      data: {},
    });
  }
};

export const updateBook = async (req: Request, res: Response, next: unknown) => {
  try {
    const updatedBook = await bookService.updateBook(req.params.id, req.body);
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
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to update book',
      data: {},
    });
  }
};

export const deleteBook = async (req: Request, res: Response, next: unknown) => {
  try {
    const deletedBook = await bookService.deleteBook(req.params.id);
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
  } catch (error) {
    res.status(500).json({
      status: 'error',
      message: 'Failed to delete book',
    });
  }
};
