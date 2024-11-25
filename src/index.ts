import express from 'express';
import cors from 'cors';
import connectDB from './db-connection';
import authRoutes from './routes/auth.route';
import authenticate from './middleware/auth';
import bookRoutes from './routes/book.route';
import mechanismRoutes from './routes/mechanism.route';

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(express.json());

// Konfigurasi CORS
app.use(
  cors({
    origin: 'http://localhost:5173', // Ganti dengan domain frontend kamu
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Metode HTTP yang diizinkan
    allowedHeaders: ['Content-Type', 'Authorization'], // Header yang diizinkan
  })
);

// Koneksi ke Database
connectDB();

// Route ke API Auth
app.use('/auth', authRoutes);

app.use('/book', bookRoutes);

app.use('/mechanism', authenticate, mechanismRoutes);

// Route Health Check
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
