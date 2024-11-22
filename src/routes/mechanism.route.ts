import { Router } from 'express';
import { borrowBook } from '../controllers/mechanism.controller';
import { returnBook } from '../controllers/mechanism.controller';

const router = Router();

router.post('/borrow/:id', (req, res, next) => {
    borrowBook(req, res, next);
});

router.post('/return/:id', (req, res, next) => {
    returnBook(req, res, next);
});

export default router;
