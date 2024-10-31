// src/controllers/auth.controller.ts
import { Request, Response, NextFunction } from 'express';
import { AuthService } from '../services/auth.service';

const authService = new AuthService();

export const register = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
  const { username, email, password } = req.body;

  try {
    const savedUser = await authService.register(username, email, password);
    
    // Respons berhasil
    return res.status(201).json({
      status: "success",
      message: "User registered successfully",
      data: {
        id: savedUser._id,
        username: savedUser.username,
        email: savedUser.email,
      },
    });
  } catch (error) {
    return res.status(400).json({
      status: "error",
      message: (error as Error).message,
      data: {},
    });
  }
};

export const login = async (req: Request, res: Response, next: NextFunction): Promise<Response> => {
    const { username, email, password } = req.body;

    // Validasi input
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
        // Panggil method login dari auth service
        const result = await authService.login(username, email, password);
        
        // Respons berhasil
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
    } catch (error) {
        console.error('Login error:', (error as Error).message); // Log error untuk debugging
        return res.status(401).json({
            status: "error",
            message: (error as Error).message,
            data: {},
        });
    }
};
