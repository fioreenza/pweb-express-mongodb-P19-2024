"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.returnBook = exports.borrowBook = void 0;
const mechanism_service_1 = require("../services/mechanism.service");
const borrowBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const userId = req.body.userId;
        const updatedQty = await (0, mechanism_service_1.borrowBookService)(bookId);
        return res.status(200).json({
            status: 'success',
            message: 'Successfully borrowed book',
            data: {
                currentQty: updatedQty,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: error.message || 'Something went wrong',
            data: {},
        });
    }
};
exports.borrowBook = borrowBook;
const returnBook = async (req, res, next) => {
    try {
        const bookId = req.params.id;
        const userId = req.body.userId;
        const updatedQty = await (0, mechanism_service_1.returnBookService)(bookId);
        return res.status(200).json({
            status: 'success',
            message: 'Successfully returned book',
            data: {
                currentQty: updatedQty,
            },
        });
    }
    catch (error) {
        console.error(error);
        return res.status(500).json({
            status: 'error',
            message: error.message || 'Something went wrong',
            data: {},
        });
    }
};
exports.returnBook = returnBook;
//# sourceMappingURL=mechanism.controller.js.map