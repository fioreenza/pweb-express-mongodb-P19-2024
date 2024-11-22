"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const auth_service_1 = require("../services/auth.service");
const authService = new auth_service_1.AuthService();
const register = async (req, res, next) => {
    const { username, email, password } = req.body;
    try {
        const savedUser = await authService.register(username, email, password);
        return res.status(201).json({
            status: "success",
            message: "User registered successfully",
            data: {
                id: savedUser._id,
                username: savedUser.username,
                email: savedUser.email,
            },
        });
    }
    catch (error) {
        return res.status(400).json({
            status: "error",
            message: error.message,
            data: {},
        });
    }
};
exports.register = register;
const login = async (req, res, next) => {
    const { username, email, password } = req.body;
    if (!username && !email) {
        return res.status(400).json({
            status: "error",
            message: "Either username or email must be provided",
            data: {},
        });
    }
    if (!password) {
        return res.status(400).json({
            status: "error",
            message: "Password must be provided",
            data: {},
        });
    }
    try {
        const result = await authService.login(username, email, password);
        return res.status(200).json({
            status: "success",
            message: "Login success",
            data: {
                user: {
                    username: result.user.username,
                    email: result.user.email,
                },
                token: result.token,
            },
        });
    }
    catch (error) {
        console.error('Login error:', error.message);
        return res.status(401).json({
            status: "error",
            message: error.message,
            data: {},
        });
    }
};
exports.login = login;
//# sourceMappingURL=auth.controller.js.map