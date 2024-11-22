"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const mechanism_controller_1 = require("../controllers/mechanism.controller");
const mechanism_controller_2 = require("../controllers/mechanism.controller");
const router = (0, express_1.Router)();
router.post('/borrow/:id', (req, res, next) => {
    (0, mechanism_controller_1.borrowBook)(req, res, next);
});
router.post('/return/:id', (req, res, next) => {
    (0, mechanism_controller_2.returnBook)(req, res, next);
});
exports.default = router;
//# sourceMappingURL=mechanism.route.js.map