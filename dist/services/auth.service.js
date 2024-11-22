"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = __importDefault(require("../models/user.model"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const JWT_SECRET = process.env.JWT_SECRET;
class AuthService {
    async register(username, email, password) {
        const existingUser = await user_model_1.default.findOne({ $or: [{ username }, { email }] });
        if (existingUser) {
            throw new Error("Username or email already exists");
        }
        const hashedPassword = await bcrypt_1.default.hash(password, 10);
        const newUser = new user_model_1.default({
            username,
            email,
            password: hashedPassword,
        });
        return await newUser.save();
    }
    async login(username, email, password) {
        console.log("Logging in user:", { username, email });
        if (!username && !email) {
            throw new Error("Either username or email must be provided");
        }
        if (!password) {
            throw new Error("Password must be provided");
        }
        const user = await user_model_1.default.findOne({ $or: [{ username }, { email }] });
        if (!user) {
            console.log("User not found");
            throw new Error("Invalid credentials");
        }
        const isMatch = await bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            console.log("Password does not match");
            throw new Error("Invalid credentials");
        }
        if (username && username !== user.username) {
            console.log("Username does not match");
            throw new Error("Invalid credentials");
        }
        const token = jsonwebtoken_1.default.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });
        return { user, token };
    }
}
exports.AuthService = AuthService;
;
//# sourceMappingURL=auth.service.js.map