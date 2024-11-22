"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const db_connection_1 = __importDefault(require("./db-connection"));
const auth_route_1 = __importDefault(require("./routes/auth.route"));
const auth_1 = __importDefault(require("./middleware/auth"));
const book_route_1 = __importDefault(require("./routes/book.route"));
const mechanism_route_1 = __importDefault(require("./routes/mechanism.route"));
const app = (0, express_1.default)();
const PORT = process.env.PORT || 5000;
app.use(express_1.default.json());
(0, db_connection_1.default)();
app.use('/auth', auth_route_1.default);
app.use('/book', auth_1.default, book_route_1.default);
app.use('/mechanism', auth_1.default, mechanism_route_1.default);
app.get('/', (req, res) => {
    res.json({
        status: 'success',
        message: 'Hello World!',
        date: new Date()
    });
});
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
//# sourceMappingURL=index.js.map