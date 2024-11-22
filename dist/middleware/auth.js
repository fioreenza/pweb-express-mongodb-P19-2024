"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const JWT_SECRET = process.env.JWT_SECRET;
exports.default = (req, res, next) => {
    const token = req.headers['authorization']?.split(' ')[1];
    if (!token) {
        res.status(401).json({
            status: "error",
            message: "Token not found",
            data: {},
        });
        return;
    }
    jsonwebtoken_1.default.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            res.status(401).json({
                status: "error",
                message: "Failed to authenticate token",
                data: {},
            });
            return;
        }
        req.body.userId = decoded.userId;
        next();
    });
};
//# sourceMappingURL=auth.js.map