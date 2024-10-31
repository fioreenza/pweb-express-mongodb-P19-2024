import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

// Middleware untuk mengautentikasi pengguna
export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const token = req.headers['authorization']?.split(' ')[1]; // Mengambil token dari header Authorization

  // Jika token tidak ada, respons dengan error
  if (!token) {
    return res.status(401).json({
      status: "error",
      message: "No token provided",
      data: {},
    });
  }

  // Verifikasi token
  jwt.verify(token, JWT_SECRET, (err, decoded) => {
    if (err) {
      return res.status(401).json({
        status: "error",
        message: "Failed to authenticate token",
        data: {},
      });
    }

    // Jika token valid, simpan informasi pengguna ke dalam request untuk digunakan di route selanjutnya
    req.body.userId = (decoded as any).userId; // Menyimpan userId dari token ke dalam request
    next(); // Lanjut ke middleware berikutnya
  });
};
