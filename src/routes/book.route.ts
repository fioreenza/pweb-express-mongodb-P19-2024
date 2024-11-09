import { Router } from 'express';
import { authenticate } from '../middleware/auth';
import {
  getAllBooks,
  getBookById,
  addNewBook
} from '../controllers/book.controller';

const router = Router();

// Public routes - tidak perlu authentication
router.get('/', getAllBooks);
router.get('/:id', getBookById);

// Protected routes - perlu authentication
router.post('/', authenticate, addNewBook);

export default router;