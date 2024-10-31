// src/services/auth.service.ts
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import User from '../models/user.model';
import dotenv from 'dotenv';

dotenv.config();
const JWT_SECRET = process.env.JWT_SECRET;

export class AuthService {
  // Method untuk pendaftaran pengguna
  async register(username: string, email: string, password: string) {
    // Periksa apakah username atau email sudah ada
    const existingUser = await User.findOne({ $or: [{ username }, { email }] });
    if (existingUser) {
      throw new Error("Username or email already exists");
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Buat pengguna baru
    const newUser = new User({
      username,
      email,
      password: hashedPassword,
    });

    // Simpan pengguna ke database
    return await newUser.save();
  }

  async login(username: string | undefined, email: string | undefined, password: string) {
    console.log("Logging in user:", { username, email }); // Logging input

    // Validasi input
    if (!username && !email) {
        throw new Error("Either username or email must be provided");
    }
    if (!password) {
        throw new Error("Password must be provided");
    }

    // Cari pengguna berdasarkan username atau email
    const user = await User.findOne({ $or: [{ username }, { email }] });
    if (!user) {
        console.log("User not found"); // Tambahkan logging
        throw new Error("Invalid credentials");
    }

    // Verifikasi password
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
        console.log("Password does not match"); // Tambahkan logging
        throw new Error("Invalid credentials");
    }

    // Pastikan password cocok dengan username yang diberikan
    if (username && username !== user.username) {
        console.log("Username does not match"); // Tambahkan logging
        throw new Error("Invalid credentials");
    }

    // Buat token
    const token = jwt.sign({ userId: user._id }, JWT_SECRET, { expiresIn: '1h' });

    return { user, token };
}
};