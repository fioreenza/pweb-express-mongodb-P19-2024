import { Router } from 'express';
import {
  getAllBooks,
  getBookById,
  addNewBook,
  updateBook,
  deleteBook,
} from '../controllers/book.controller';

const router = Router();

router.get('/', getAllBooks);       
router.post('/', addNewBook);        

router.get ('/:id', (req, res, next) => {
    getBookById(req, res, next);
});

router.patch('/:id', (req, res, next) => {
    updateBook(req, res, next);
});

router.delete('/:id', (req, res, next) => {
    deleteBook(req, res, next);
});
export default router;
