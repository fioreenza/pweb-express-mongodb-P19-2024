import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

// Extend Express Request type untuk menambah user
declare global {
  namespace Express {
    interface Request {
      user?: any; // Bisa diganti dengan interface User yang lebih spesifik
    }
  }
}

export const authenticate = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  try {
    // Ambil token dari header
    const authHeader = req.headers.authorization;
    
    if (!authHeader?.startsWith('Bearer ')) {
      res.status(401).json({ 
        status: 'error',
        message: 'No token provided' 
      });
      return;
    }

    const token = authHeader.split(' ')[1];
    
    // Verifikasi token
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your-secret-key');
    
    // Tambahkan user ke request object
    req.user = decoded;
    
    // Lanjut ke handler berikutnya
    next();
  } catch (error) {
    res.status(401).json({ 
      status: 'error',
      message: 'Invalid token'
    });
  }
};