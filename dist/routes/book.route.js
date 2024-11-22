"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const book_controller_1 = require("../controllers/book.controller");
const router = (0, express_1.Router)();
router.get('/', book_controller_1.getAllBooks);
router.post('/', book_controller_1.addNewBook);
router.get('/:id', (req, res, next) => {
    (0, book_controller_1.getBookById)(req, res, next);
});
router.patch('/:id', (req, res, next) => {
    (0, book_controller_1.updateBook)(req, res, next);
});
router.delete('/:id', (req, res, next) => {
    (0, book_controller_1.deleteBook)(req, res, next);
});
exports.default = router;
//# sourceMappingURL=book.route.js.map